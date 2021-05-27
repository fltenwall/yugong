import { useCallback, useEffect, useMemo, useState } from 'react';
import requester from '~/core/fetch';
import EventEmitter from '~/core/EventEmitter';
import { AppDataElementsTypes, ArgumentsArray, ArgumentsBoolean } from '~/types/appData';
import { Modules } from '~/types/modules';
import Wrapper from '../Wrapper';
import s from './Text.module.less';
import useStyles from './Text.useStyle';
import { getArgumentsItem } from '~/core/getArgumentsTypeDataFromDataSource';
import classNames from 'classnames';
import useLifeCycle from '~/hooks/useLifeCycle';

export interface TextProps extends AppDataElementsTypes {
    id: string;
    eventEmitter: EventEmitter;
}

const Text: Modules<TextProps> = (props) => {
    const { eventEmitter, events = {}, api, style, moduleId } = props;
    const [textArea, setTextArea] = useState<any>([]);
    const [autoNumber, setAutoNumber] = useState(false);
    const userClass = useStyles(style);
    // const [eventsDispatch, eventEmitter] = useLifeCycle(moduleId, {mount: '初始化', unmount: '卸载'}, {})

    // 初始值
    useEffect(() => {
        const text = getArgumentsItem({
            type: 'array',
            name: '文本内容',
            describe: '可设置多行文本内容',
            html: true,
            data: [
                '文本<b>Text</b>',
            ],
            fieldName: 'textArray',
        });
        setTextArea(text);
    }, [])

    // 设置文本
    const setText = useCallback((args: ArgumentsArray, autoNumber: ArgumentsBoolean) => {
        const text = getArgumentsItem(args);
        const isAutoNum = getArgumentsItem(autoNumber);
        setAutoNumber(isAutoNum as boolean);
        setTextArea(text);
    }, []);

    // 向eventEmitter注册事件，向外公布
    useMemo(() => {
        eventEmitter.addEventListener('setText', setText);
    }, [eventEmitter, setText]);

    // API请求 注意依赖关系
    useEffect(() => {
        const apiArguments = api?.find((item) => item.apiId === '');
        requester(apiArguments || {});
    }, [api]);
    // 基本事件
    useEffect(() => {
        // 执行挂载事件
        eventEmitter.emit(events.mount);
        return () => {
            // 执行卸载事件
            eventEmitter.emit(events.unmount);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper {...props} maxWidth maxHeight itemAlign="top">
            <ul className={classNames(s.text, userClass.wrap)}>
                {textArea.map((item: any, index: number) => (
                    <li key={index} className={userClass.paragraph}>
                       {autoNumber ? <span>{index + 1}</span> : null} {item}
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
};

/**
 * 注册方法的静态描述与默认参数定义
 */
Text.exposeFunctions = [
    {
        name: 'setText',
        description: '设置文本',
        arguments: [
            {
                type: 'array',
                name: '文本内容',
                describe: '可设置多行文本内容',
                html: true,
                data: [
                    '文本<b>Text</b>',
                ],
                fieldName: 'textArray',
            },
            {
                type: 'boolean',
                name: '自动序号',
                describe: '自动生成1开始的序号',
                data: {
                    comparableAverageA: 'a',
                    comparableAverageB: 'b',
                    method: '===',
                },
                fieldName: 'autoNumber',
            },
        ],
    },
];

/**
 * 发布事件的静态描述
 */
Text.exposeEvents = [
    {
        name: 'mount',
        description: '初始化',
    },
    {
        name: 'unmount',
        description: '卸载',
    },
];

/**
 * 发布默认porps
 */
Text.exposeDefaultProps = {
    style: {
        basic: {
            font: {
                align: 'left',
            },
        },
        wrap: {},
        paragraph: {},
        prefix: {},
        even: {},
        odd: {},
        first: {},
        last: {},
    },
    styleDescription: [
        {
            title: '基础',
            value: 'basic',
            children: [
                {
                    title: '包裹器',
                    value: 'wrap',
                    children: [
                        {
                            title: '段落/项',
                            value: 'paragraph',
                            children: [
                                {
                                    title: '段落编号(先在设置文本中开启自动编号)',
                                    value: 'prefix',
                                },
                            ],
                        },
                        {
                            title: '偶数段落/项',
                            value: 'even',
                        },
                        {
                            title: '奇数段落/项',
                            value: 'odd',
                        },
                        {
                            title: '首行段落/项',
                            value: 'first',
                        },
                        {
                            title: '末行段落/项',
                            value: 'last',
                        },
                    ],
                },
            ],
        },
    ],
};
/**
 * 发布默认Api
 */
Text.exposeApi = [];

export default Text;
