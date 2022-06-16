import { ArrowLeftOutlined } from '@ant-design/icons';
import { Drawer, PageHeader } from 'antd';
import React from 'react';
import { SliderDataItem } from '~/modules/Slider/type';
import BackgroundGroup from './BackgroundGroup';
import s from './PageSetter.module.scss';

interface Props {
  title: string;
  onClose: () => void;
  visible: boolean;
  data?: SliderDataItem
}

const PageSetter:React.FC<Props> = ({ onClose, visible, title, data={}}) => {
  return (
    <Drawer
      title={title}
      placement="right"
      bodyStyle={{
        padding: 0,
        backgroundColor: '#fafafa'
      }}
      maskStyle={{ backgroundColor: 'transparent' }}
      width={580}
      maskClosable
      onClose={onClose}
      visible={visible}
      closeIcon={<><ArrowLeftOutlined />返回</>}
    >
      <PageHeader className={s.header} title="背景设置" />
      <div className={s.wrap}>
        <BackgroundGroup />
      </div>
    </Drawer>
  )
}

export default PageSetter;