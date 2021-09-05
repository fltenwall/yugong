import EventEmitter from "~/core/EventEmitter";
import {
  AnyObjectType,
  AppDataElementsTypes,
  ArgumentsBoolean,
  ArgumentsNumber,
  ArgumentsString,
} from "~/types/appData";
import { Modules } from "~/types/modules";
import config from "./Lottery.config";
import Wrapper from "../Wrapper";
import useLifeCycle from "~/hooks/useLifeCycle";
import useStyles from "./Lottery.useStyles";
import Game, { GameRecords } from "~/components/Game";
import { GameHandle, GameMap } from "~/components/Game/useGame";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as mock from "./mockData";
import { getArgumentsItem } from "~/core/getArgumentsTypeDataFromDataSource";
import message from "~/components/Message";
import requester from "~/core/fetch";
import { Prize } from "@byhealth/lottery/dist/types/core";
import { useSelector } from "react-redux";
import { RootState } from "~/redux/store";
import { setClass } from "./helper";
import { debounce } from "lodash";
import { gametypes } from "~/components/Game/Game";

export interface LotteryProps extends AppDataElementsTypes {
  id: string;
  eventEmitter: EventEmitter;
}

const Lottery: Modules<LotteryProps> = (props) => {
  const { moduleId, style } = props;
  const { currentEditorStylePath } = useSelector(
    (state: RootState) => state.controller
  );

  const [prizes, setPrizes] = useState<Prize[]>([]);
  const [phoneAndRCardId, setPhoneAndRCardId] = useState<AnyObjectType>();
  const [receiverInfo, setReceiverInfo] = useState<AnyObjectType>(
    mock.receiverInfo
  );
  const [successmodalParams, setSuccessmodalParams] = useState<AnyObjectType>(
    {}
  );

  const [type, setType] = useState<keyof GameMap>("redenvelope");
  const [displayRecord, setDisplayRecord] = useState(false);

  // 禁用抽奖
  const checked = useRef<{
    /**禁用信息 */
    message?: string;
    /**是否禁用 */
    enabled: boolean;
  }>({ enabled: true });

  // 确定数据是否准备就是，没有准备好时会启用模拟数据
  const prizesIsReadyRef = useRef<boolean>();
  // 此ref用于存储useLifeCycle组件暴露的事件
  const dispatchEventRef = useRef<{
    mount: () => void;
    unmount: () => void;
    onStart: () => void;
    onEnd: () => void;
    onCancel: () => void;
    onEnsure: () => void;
    onShowSuccess: () => void;
    onShowFailed: () => void;
    onShowAddress: () => void;
  }>();

  let gameHandle: GameHandle<typeof Game> | undefined = undefined;
  const setGameHandle = useCallback((ref) => {
    gameHandle = ref!;
  }, []);

  // 页面api
  const { api } = props;

  // 皮肤设置样式
  const MId = `gametarget${moduleId}`;
  const userClass = useStyles(MId)(style);

  /**保存地址 */
  const handleSaveAddress = useCallback(() => {
    gameHandle?.game.current?.core.AddressModal.showModal((address) => {
      console.log(address);
    });
  }, [gameHandle]);

  // ===========================================组件Api============================================

  /**
   * 抽奖前置Api, 用于检查是否满足抽奖条件
   * */
  const apiBeforeStart = useCallback(async () => {
    const apiArguments = api?.find((item) => item.apiId === "beforeStart");
    // 获取抽奖结果数据， 将结果数据中转到全局数据中
    if (apiArguments && apiArguments.url && apiArguments.method) {
      try {
        return requester(apiArguments || {});
      } catch (error) {
        throw error;
      }
    }
  }, [api]);

  /**
   * 抽奖Api, 用于抽奖
   */
  const apiStart = useCallback(async () => {
    const apiArguments = api?.find((item) => item.apiId === "lottery");
    // 获取抽奖结果数据， 将结果数据中转到全局数据中
    if (apiArguments && apiArguments.url && apiArguments.method) {
      return requester(apiArguments || {});
    }
  }, [api]);

  /**
   * 保存地址Api, 用于实物奖品保存地址信息
   */
  const apiSaveAddress = useCallback(
    async (data) => {
      // 这里不需要api设置参数
      const apiArguments = api?.find((item) => item.apiId === "saveAddress");
      // 获取抽奖结果数据， 将结果数据中转到全局数据中
      if (apiArguments) {
        apiArguments.body = [
          { type: "object", fieldName: "addressData", data },
        ];
        return requester(apiArguments || {});
      }
      // 处理收货地址
      message.warning("没有设置保存地址Api, 当前不可保存！");
    },
    [api]
  );

  /**
   * 检查手机验证码
   * */
  const checkVerificationCode = useCallback(
    async (data) => {
      // 这里不需要api设置参数
      const apiArguments = api?.find(
        (item) => item.apiId === "getVerificationCode"
      );
      // 获取抽奖结果数据， 将结果数据中转到全局数据中
      if (apiArguments) {
        apiArguments.body = [
          { type: "object", fieldName: "addressData", data },
        ];
        return requester(apiArguments || {});
      }
      // 处理收货地址
      message.warning("没有设置获取验证码Api！");
    },
    [api]
  );

  // ===========================================组件方法============================================ // 
  /**
   * 修改抽奖类型 
   */
  const setGameType = useCallback((type: ArgumentsString) => {
    const argOptType = getArgumentsItem(type) as keyof GameMap;
    if (gametypes.includes(argOptType)) {
      setType(argOptType);
    }
  }, []);

  /**
   * 设置奖品数据, 无数据时使用mock
   */
  const setRunningPrizes = useCallback((prizes) => {
    const prizesArg = getArgumentsItem(prizes) as any[];
    if (Array.isArray(prizesArg) && prizesArg.length) {
      setPrizes(prizesArg);
      prizesIsReadyRef.current = true;
    }
    // 没有准备过数据会使用mock数据
    if (!prizesIsReadyRef.current) {
      setPrizes(mock.prizes);
    }
  }, []);

  /**
   * 设置玩家基本信息
   * @param phone 设置玩家手机号码
   * @param cardIdRequest 设置领取奖品时是否需要填写身份证1 隐藏，2 验证，3 为空时不验证有填写时验证，4 不验证
   */
  const useConfig = useCallback(
    (phone: ArgumentsString, cardIdRequest: ArgumentsNumber) => {
      const argOptPhone = getArgumentsItem(phone);
      const argCardIdRequest = getArgumentsItem(cardIdRequest);
      setPhoneAndRCardId({
        phone: argOptPhone,
        cardIdRequest: argCardIdRequest,
      });
    },
    []
  );

  /**
   * 设置中奖弹窗
   * @param title 中奖弹窗标题
   * @param animation 中奖弹窗动画
   */
  const setSuccessModal = useCallback(
    (title: ArgumentsString, animation: ArgumentsString) => {
      setSuccessmodalParams({
        title: getArgumentsItem(title),
        animation: getArgumentsItem(animation),
      });
    },
    []
  );

  /**
   * 检查抽奖
   * @param
   */
  const checkedLottery = useCallback(
    (enabled: ArgumentsBoolean, message: ArgumentsString) => {
      const argEnabled = getArgumentsItem(enabled) as boolean;
      const argMessage = getArgumentsItem(message) as string;
      checked.current = {
        enabled: argEnabled,
        message: argMessage,
      };
    },
    []
  );

  // ==============================================end=============================================
  // hank 等待
  const setDelayStart = useCallback(
    () =>
      new Promise((res) =>
        setTimeout(() => {
          dispatchEventRef.current?.onStart();
          res(null);
        })
      ),
    []
  );

  /**
   * 开始抽奖
   * */
  const startLottery = useCallback(async () => {
    // step1、执行前置api 用于抽奖前检查是否满足抽奖条件
    await apiBeforeStart();

    // step2 执行抽奖事件
    await setDelayStart();
    // step3、检查状态是否可以抽奖
    if (!checked.current.enabled) {
      console.log("没有权限，请勿抽奖！");
      message.error(checked.current?.message || "暂无抽奖权限！");
      throw checked.current?.message;
    }

    // step4、返回抽奖接口
    const settedApi = (await apiStart()) as AnyObjectType;

    // step5、执行结束事件，可用于重置数据
    dispatchEventRef.current?.onEnd();
    if (settedApi?.response?.prizeId !== undefined) {
      let currentPrize = settedApi.response;
      prizes.some((prize) => {
        if (prize.prizeId === currentPrize.prizeId) {
          currentPrize = {
            ...currentPrize,
            ...(prize || {}),
          };
          return true;
        }
        return false;
      });

      return currentPrize;
    }

    // 没有设置Api时启用mock数据
    if (!settedApi) {
      message.warning("活动奖品或抽奖Api未设置正确, 当前使用模拟抽奖！");
      const winnerInfo = prizes[Math.floor(Math.random() * prizes.length - 1)];
      return winnerInfo;
    }
  }, [apiBeforeStart, apiStart, checked, prizes, setDelayStart]);

  /**
   * 设置默认实物奖品邮寄地址，用于地址填写时回填信息
   * @param receiverPhone 收货电话
   * @param regionName 收货姓名
   * @param region 收货人省市区
   * @param address 收货人详细地址
   * @param idCard 人身份证id
   */
  const setDefaultReceiveInfo = useCallback(
    (
      receiverPhone: ArgumentsString,
      regionName: ArgumentsString,
      region: ArgumentsString,
      address: ArgumentsString,
      idCard: ArgumentsString
    ) => {
      const argReceiverPhone = getArgumentsItem(receiverPhone);
      let argRegionName: any = getArgumentsItem(regionName);
      let argRegion: any = getArgumentsItem(region);
      const argAddress = getArgumentsItem(address);
      const argIdCard = getArgumentsItem(idCard);
      argRegionName = argRegionName
        ?.replace(/，/g, ",")
        ?.split(",")
        ?.filter(Boolean);
      argRegion = argRegion?.replace(/，/g, ",")?.split(",");
      const parames = {
        receiverPhone: argReceiverPhone,
        address: argAddress,
        region: argRegion,
        idCard: argIdCard,
      };

      if (!!argRegionName.length) {
        (parames as any).regionName = argRegionName;
      }
      gameHandle?.game.current?.core.AddressModal.updateParams(parames as any);
      setReceiverInfo(parames);
    },
    [gameHandle]
  );

  /**通过其他事件关联抽奖 */
  const lottery = useCallback(() => {
    gameHandle?.game.current?.core.lottery();
  }, [gameHandle]);

  /**显示中奖记录 */
  const showRecord = useCallback(() => {
    setDisplayRecord(true);
  }, []);

  /**
   * 编辑弹窗样式时可视化弹窗
   * 做高频编辑防抖处理
   */
  const onChangeDebounce = useMemo(
    () =>
      debounce(() => {
        if (gameHandle?.game.current && currentEditorStylePath?.length) {
          const path = currentEditorStylePath?.map((item) => item.value);
          if (path.includes("successcontainer")) {
            gameHandle?.game.current?.core.showSuccessModal(prizes[0]);
          }
          if (path.includes("failedcontainer")) {
            gameHandle?.game.current?.core.showFailedModal(prizes[1]);
          }
          if (path.includes("addressmodalcontainer")) {
            gameHandle?.game.current?.core.showAddressModal();
          }
        }
      }, 1000),
    [currentEditorStylePath, gameHandle, prizes]
  );

  const editorShow = useCallback(() => {
    onChangeDebounce();
  }, [onChangeDebounce]);

  useEffect(() => {
    editorShow();
  }, [editorShow]);

  // lifeCycle
  const [dispatchEvent] = useLifeCycle(
    moduleId,
    {
      mount: "初始化",
      unmount: "卸载",
      onStart: "抽奖",
      onEnd: "抽奖结束",
      onCancel: "放弃中奖/关闭弹窗",
      onEnsure: "确认中奖结果",
      onShowSuccess: "显示中奖",
      onShowFailed: "显示未中奖",
      onShowAddress: "显示地址",
    },
    {
      setGameType,
      setRunningPrizes,
      lottery,
      checkedLottery,
      useConfig,
      setDefaultReceiveInfo,
      setSuccessModal,
      showRecord
    },
    api?.find((item) => item.apiId === "init")
  );
  // ref存储
  dispatchEventRef.current = dispatchEvent;

  return (
    <Wrapper {...props}>
      <Game
        className={userClass.wrap}
        parentId={`game${props.moduleId}wrap`}
        targetId={`game${props.moduleId}`}
        playerPhone={phoneAndRCardId?.phone}
        successModalTitle={successmodalParams.title || "恭喜您，获得"}
        successModalAnimation={{
          form: successmodalParams.animation || "flipInY",
        }}
        type={type}
        cardIdRequest={phoneAndRCardId?.cardIdRequest}
        ref={setGameHandle}
        start={startLottery}
        prizes={prizes}
        saveAddress={apiSaveAddress}
        receiverInfo={receiverInfo}
        onCancel={dispatchEventRef.current?.onCancel}
        onEnsure={dispatchEventRef.current?.onEnsure}
        checkVerificationCode={checkVerificationCode}
        onShowSuccess={() => {
          setClass(`${MId}_successmodal`, userClass.successModal);
          dispatchEventRef.current?.onShowSuccess();
        }}
        onShowFailed={() => {
          setClass(`${MId}_failedmodal`, userClass.failedModal);
          dispatchEventRef.current?.onShowFailed();
        }}
        onShowAddress={() => {
          setClass(`${MId}_addressmodal`, userClass.addressModal);
          dispatchEventRef.current?.onShowAddress();
        }}
      />
      <GameRecords
        visible={displayRecord}
        onCancel={() => setDisplayRecord(false)}
        okText="确定"
        title="幸运记录"
        disablePullUp={true}
        disablePullDown={false}
        onPullDown={async () => console.log()}
        onPullUp={async () => console.log()}
      >
        这里是中奖记录
        <br />
        <button onClick={handleSaveAddress}>保存中奖记录</button>
      </GameRecords>
      <button onClick={showRecord}>中奖记录</button>
      <button onClick={lottery}>外置抽奖</button>
    </Wrapper>
  );
};

// bind static
for (const key in config) {
  if (Object.prototype.hasOwnProperty.call(config, key)) {
    Lottery[key] = config[key];
  }
}

export default Lottery;
