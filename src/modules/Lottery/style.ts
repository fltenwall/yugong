import { AppDataElementsStyleTypes } from '~/types/appData';
import { StyleDescItem } from '~/types/modules';

export const style: AppDataElementsStyleTypes = {
    basic: {},
    /** -----------九宫格----------- */
    //#region
    // 游戏
    boxroulette_items_wrap: {},
    // 游戏外框
    boxroulette_items_lottery: {},
    // 奖品外框
    boxroulette_items_prizeItem: {},
    // 奖品激活/选中
    boxroulette_items_selected: {},
    // 奖品
    boxroulette_prize: {},
    // 奖品图片
    boxroulette_items_gameimg: {},
    // 奖品名称
    boxroulette_items_prizealias: {},
    // 抽奖按钮外框
    boxroulette_items_lotterybuttonwrap: {},
    // 抽奖按钮
    boxroulette_items_lotterybutton: {},
    //#endregion
    /** -----------弹窗-------------- */
    //#region
    // 半透明遮罩层_overlay
    dialog_overlay: {},
    // 弹窗包裹器_content_wrap
    dialog_content_wrap: {},
    // 弹窗外框_content
    dialog_content: {},
    // 弹窗_modules
    dialog_modules: {
        backgroundGroup: {
            backgroundColor: 'rgba(255, 255, 255, 1)',
        },
        border: {
            radiusTopLeft: [1, 'rem'],
            radiusTopRight: [1, 'rem'],
            radiusBottomLeft: [1, 'rem'],
            radiusBottomRight: [1, 'rem'],
        },
        display: {
            width: [80, 'vw'],
        },
    },
    // 容器外框_article
    dialog_article: {},
    // 容器_contentwrap
    dialog_contentwrap: {},
    // 关闭按钮_close
    dialog_close: {
        display: {
            width: [1.6, 'rem'],
            height: [1.6, 'rem'],
            position: 'absolute',
            bottom: [-3.5, 'rem'],
            left: [50, '%'],
            top: ['unset', '-'],
            margin: [null, null, null, [-0.8, 'rem']],
        },
        backgroundGroup: {
            backgroundList: [
                {
                    imageUrl:
                        'https://yyjzx.blob.core.chinacloudapi.cn/upload-test/images/0924132958042.png',
                    repeat: 'no-repeat',
                    sizeY: [100, '%'],
                    sizeX: [100, '%'],
                },
            ],
            backgroundColor: 'rgba(0, 0, 0, 0)',
        },
    },
    // 提交按钮_submit
    dialog_submit: {
        backgroundGroup: {
            backgroundList: [
                {
                    gradient: [
                        {
                            color: 'rgba(156, 39, 176, 1)',
                            transition: 1,
                        },
                        {
                            color: 'rgba(103, 58, 183, 1)',
                            transition: 100,
                        },
                    ],
                    gradientDirections: 'top',
                },
            ],
        },
        border: {
            borderPosition: {
                borderTop: false,
                borderRight: false,
                borderBottom: false,
                borderLeft: false,
                border: true,
            },
            radiusTopLeft: [1, 'rem'],
            radiusTopRight: [1, 'rem'],
            radiusBottomLeft: [1, 'rem'],
            radiusBottomRight: [1, 'rem'],
            borderStyle: 'none',
            borderWidth: [0, 'px'],
        },
        font: {
            color: 'rgba(255, 255, 255, 1)',
            fontSize: [1, 'rem'],
        },
        display: {
            padding: [
                [0.5, 'rem'],
                [1, 'rem'],
                [0.5, 'rem'],
                [1, 'rem'],
            ],
        },
    },
    //#endregion
    /**------------中奖弹窗------------- */
    //#region
    successmodal_contenttop: {},
    successmodal_article_content: {},
    successmodal_header: {},
    successmodal_modaltitle: {},
    successmodal_prizename: {},
    successmodal_awardmsg: {},
    successmodal_prizeimg: {},
    successmodal_memo: {},
    successmodal_contentbottom: {},
    /**------------未中奖弹窗------------- */
    failedmodal_contenttop: {},
    failedmodal_article_content: {},
    failedmodal_header: {},
    failedmodal_modaltitle: {},
    failedmodal_prizename: {},
    failedmodal_awardmsg: {},
    failedmodal_prizeimg: {},
    failedmodal_memo: {},
    failedmodal_contentbottom: {},
    /**------------地址弹窗--------------- */
    addressmodal_addressbox: {},
    addressmodal_formbox: {},
    addressmodal_header: {},
    addressmodal_main: {},
    addressmodal_player: {},
    addressmodal_subtitle: {},
    addressmodal_row: {},
    addressmodal_label: {},
    addressmodal_input: {},
    addressmodal_textarea: {},
    /**------------规则弹窗--------------- */
    rules_list: {},
    rules_list_item: {},
    /**------------中奖记录--------------- */
    records_list: {},
    records_list_item: {},
    records_list_item_prizeimg_wrap: {},
    records_list_item_prizeimg: {},
    records_list_item_text: {},
    records_list_item_prizename: {},
    records_list_item_wintime: {},
    records_list_item_saveaddress: {},
    records_list_item_address: {},
    //#endregion
};

export const styleDescription:
    | {
          [keys: string]: string;
      }
    | StyleDescItem[] = [
    {
        title: '基础',
        value: 'basic',
        children: [
            {
                title: '九宫格',
                value: 'boxroulette_items_wrap',
                children: [
                    {
                        title: '游戏外框',
                        value: 'boxroulette_items_lottery',
                        children: [
                            {
                                title: '奖品外框',
                                value: 'boxroulette_items_prizeItem',
                                children: [
                                    {
                                        title: '奖品激活/选中',
                                        value: 'boxroulette_items_selected',
                                    },
                                    {
                                        title: '奖品',
                                        value: 'boxroulette_prize',
                                    },
                                    {
                                        title: '奖品图片',
                                        value: 'boxroulette_items_gameimg',
                                    },
                                    {
                                        title: '奖品名称',
                                        value: 'boxroulette_items_prizealias',
                                    },
                                ],
                            },
                            {
                                title: '抽奖按钮外框',
                                value: 'boxroulette_items_lotterybuttonwrap',
                                children: [
                                    {
                                        title: '抽奖按钮',
                                        value: 'boxroulette_items_lotterybutton',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                title: '弹窗(遮罩层)',
                value: 'dialog_overlay',
                children: [
                    {
                        title: '包裹器',
                        value: 'dialog_content_wrap',
                        children: [
                            {
                                title: '外框',
                                value: 'dialog_content',
                                children: [
                                    {
                                        title: '弹窗',
                                        value: 'dialog_modules',
                                        children: [
                                            {
                                                title: '内容外框',
                                                value: 'dialog_article',
                                            },
                                            {
                                                title: '内容',
                                                value: 'dialog_contentwrap',
                                            },
                                            {
                                                title: '提交按钮',
                                                value: 'dialog_submit',
                                            },
                                        ],
                                    },
                                    {
                                        title: '关闭按钮/图标',
                                        value: 'dialog_close',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                title: '中奖弹窗',
                value: 'successmodal_article_content',
                children: [
                    {
                        title: '顶部',
                        value: 'successmodal_contenttop',
                    },
                    {
                        title: '头部',
                        value: 'successmodal_header',
                        children: [
                            {
                                title: '标题',
                                value: 'successmodal_modaltitle',
                            },
                        ],
                    },
                    {
                        title: '奖品名',
                        value: 'successmodal_prizename',
                    },
                    {
                        title: '获奖信息',
                        value: 'successmodal_awardmsg',
                    },
                    {
                        title: '奖品图片',
                        value: 'successmodal_prizeimg',
                    },
                    {
                        title: '奖品备注',
                        value: 'successmodal_memo',
                    },
                    {
                        title: '底部',
                        value: 'successmodal_contentbottom',
                    },
                ],
            },
            {
                title: '未中奖弹窗',
                value: 'failedmodal_article_content',
                children: [
                    {
                        title: '顶部',
                        value: 'failedmodal_contenttop',
                    },
                    {
                        title: '头部',
                        value: 'failedmodal_header',
                        children: [
                            {
                                title: '标题',
                                value: 'failedmodal_modaltitle',
                            },
                        ],
                    },
                    {
                        title: '奖品名',
                        value: 'failedmodal_prizename',
                    },
                    {
                        title: '获奖信息',
                        value: 'failedmodal_awardmsg',
                    },
                    {
                        title: '奖品图片',
                        value: 'failedmodal_prizeimg',
                    },
                    {
                        title: '奖品备注',
                        value: 'failedmodal_memo',
                    },
                    {
                        title: '底部',
                        value: 'failedmodal_contentbottom',
                    },
                ],
            },
            {
                title: '地址弹窗',
                value: 'addressmodal_addressbox',
                children: [
                    {
                        title: '外框',
                        value: 'addressmodal_formbox',
                        children: [
                            {
                                title: '标题',
                                value: 'addressmodal_header',
                            },
                            {
                                title: '内容',
                                value: 'addressmodal_main',
                                children: [
                                    {
                                        title: '玩家信息',
                                        value: 'addressmodal_player',
                                    },
                                    {
                                        title: '子标题',
                                        value: 'addressmodal_subtitle',
                                    },
                                    {
                                        title: '表单项',
                                        value: 'addressmodal_row',
                                        children: [
                                            {
                                                title: '标签',
                                                value: 'addressmodal_label',
                                            },
                                            {
                                                title: '输入框',
                                                value: 'addressmodal_input',
                                            },
                                            {
                                                title: '文本框',
                                                value: 'addressmodal_textarea',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                title: '规则弹窗',
                value: 'rules_list',
                children: [
                    {
                        title: '规则项',
                        value: 'rules_list_item',
                    },
                ],
            },
            {
                title: '中奖记录',
                value: 'records_list',
                children: [
                    {
                        title: '记录项',
                        value: 'records_list_item',
                        children: [
                            {
                                title: '奖品图片外框',
                                value: 'records_list_item_prizeimg_wrap',
                                children: [
                                    {
                                        title: '奖品图片',
                                        value: 'records_list_item_prizeimg',
                                    },
                                ],
                            },
                            {
                                title: '内容',
                                value: 'records_list_item_text',
                                children: [
                                    {
                                        title: '奖品名称',
                                        value: 'records_list_item_prizename',
                                    },
                                    {
                                        title: '时间',
                                        value: 'records_list_item_wintime',
                                    },
                                    {
                                        title: '填写地址',
                                        value: 'records_list_item_saveaddress',
                                    },
                                    {
                                        title: '地址信息',
                                        value: 'records_list_item_address',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
