import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import React, { useCallback, useState } from 'react';
import { BackgroundGroup } from '~/types/appData';
import BackgroundItem from './BackgroundItem';
import s from './BackgroundGroup.module.less'

interface Props {
    updateKey: string;
    onChange: (data: BackgroundGroup[]) => void;
    defaultData: BackgroundGroup[];
}

const Backgroundgroup: React.FC<Props> = ({ defaultData, onChange }) => {
    const [backgroundList, setBackgroundList] = useState(defaultData);

    const onPlus = useCallback(() => {
        const data = [...backgroundList, {}];
        setBackgroundList(data);
        onChange(data);
    }, [backgroundList, onChange]);

    const onMinus = useCallback(
        (index: number) => {
            const data = backgroundList.filter((_, i) => index !== i);
            setBackgroundList(data);
            onChange(data);
        },
        [backgroundList, onChange],
    )

    const onChangeItem = useCallback(
        (index: number) => (item: BackgroundGroup) => {
            const oprateBackgroundList = [...backgroundList];
            oprateBackgroundList[index] = item;
            setBackgroundList(oprateBackgroundList);
            onChange(oprateBackgroundList);
        },
        [backgroundList, onChange],
    )
    return (
        <>
            <Row>
                <Col span={24}>
                    <Button
                        size="small"
                        icon={<PlusOutlined />}
                        onClick={onPlus}
                    />
                </Col>
            </Row>
            {backgroundList.map((data, index) => (
                <div key={index}>
                    <div className={s.divide}>
                        <div className={s.title}>背景{index + 1}</div>
                        <div className={s.menu}>
                            <Button
                                size="small"
                                icon={
                                    <MinusOutlined
                                        onClick={() => onMinus(index)}
                                    />
                                }
                            />
                        </div>
                    </div>
                    <BackgroundItem defaultData={data} onChange={onChangeItem(index)} />
                </div>
            ))}
        </>
    );
};

export default Backgroundgroup;
