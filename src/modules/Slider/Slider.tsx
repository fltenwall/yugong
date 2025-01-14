
import { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Lazy,
} from 'swiper';

import * as effects from './effect';

// Styles must use direct files imports
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';


import PresetModule from '~/components/PresetModule';
import { ModuleBaseProps } from '~/components/PresetModule/PresetModule';
import config, { ExposeEventsKeys } from './Slider.config';
import createStyles, { ClassesKey } from './Slider.createStyles';
import classNames from 'classnames';
import s from './Slider.module.less';
import Wrapper from '../Wrapper';
import isUrl from '~/core/helper/isUrl';
import { ArgumentsItem } from '~/types/appData';
import { getArguments } from '~/core/getArgumentsTypeDataFromDataSource';


SwiperCore.use([Navigation, Pagination, Scrollbar, Lazy, Autoplay]);

interface Datas {
  data?: string;
  link?: string;
}

class Slider extends Component<SliderProps, State> {
  swiper: SwiperCore | undefined;
  prefix: string;
  ref: any;
  constructor(props: SliderProps) {
    super(props)
    this.state = {
      datas: [],
      delay: 3000,
      hideNav: false,
      hidePage: false,
      breakInterface: false,
      autoplay: true,
      loop: true,
      speed: 600,
      effect: effects.slider1,
      reSetSW: true,
      direction: 'horizontal'
    }
    this.prefix = `swiper${this.props.moduleId}`;
  }

  componentDidMount() {
    this.props.registersFunction({
      setData: this.setData,
      setSlider: this.setSlider
    })
    this.props.eventDispatch().mount();
    if (config.exposeFunctions?.[1].arguments) this.setData(...config.exposeFunctions[1].arguments);
  }

  componentWillUnmount() {
    this.props.eventDispatch().unmount();
  }

  setData =
    (...args: ArgumentsItem[]) => {
      const datas: Datas[] = [];
      const { imageUrls, imageLinks } = getArguments(args);
      (imageUrls as any[])?.forEach((element: any, index: number) => {
        datas.push({
          data: element,
          link: imageLinks[index],
        });
      });
      this.setState({
        datas
      });
    }

  setSlider = (...args: ArgumentsItem[]) => {
    const { navigation, pagination, delay, speed, disableOnInteraction, effect, direction, loop } = getArguments(args);
    const data: any = {}
    if (effects[effect]) data.effect = effects[effect];
    if (delay) data.delay = delay;
    if (delay) { data.autoplay = true } else { data.autoplay = false };
    if (speed) data.speed = speed;
    if (direction) data.direction = direction;

    if (loop === 1) data.loop = true;
    if (loop === 2) data.loop = false;

    if (disableOnInteraction === 1) { data.breakInterface = true };
    if (disableOnInteraction === 2) { data.breakInterface = false };

    if (navigation === 1) data.hideNav = true;
    if (navigation === 2) data.hideNav = false;

    if (pagination === 1) data.hidePage = true;
    if (pagination === 2) data.hidePage = false;
    data.reSetSW = false;
    console.log('data.delay', data.delay);

    this.setState(data, () => this.setState({ reSetSW: true }))
  }

  onClickImg = (item: Datas, index: number) => () => {
    if (item.link && isUrl(item.link) && this.swiper?.activeIndex === index + 1) {
      window.location.href = item.link;
    }
  }

  getPageDatas: () => ({ pageDatas: Datas[], style: any }) = () => {
    let pageDatas = this.state.datas;
    let style = () => ({});
    const array = ['P', 'a', 'r', 'a', 'l', 'l', 'a', 'x'];
    if (!pageDatas.length) {
      pageDatas = [{ data: '1' }, { data: '2' }, { data: '3' }, { data: '4' }, {
        data: <>
          {array.map((item, index) => <div
            key={index}
            data-swiper-parallax-x="800"
            data-swiper-parallax-y="800"
            data-swiper-parallax-opacity="0"
            data-swiper-parallax-duration={`${(index + 1) * 200}`}
          >
            {item}
          </div>)}
        </> as any,
      }];
      style = () => ({
        background: `rgb(${Math.random() * 255} ${Math.random() * 255} ${Math.random() * 255})`,
        borderRadius: '10px',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff'
      })
    };

    return { pageDatas, style };
  }


  onStart = (e: any) => {
    if (e.activeIndex === this.state.datas.length) {
      this.props.eventDispatch().onLastOneStart();
    }
  }

  render() {
    if (!this.state.reSetSW) return null;
    const { classes } = this.props;
    const { hideNav, hidePage, autoplay, breakInterface, loop, delay, speed, effect, direction } = this.state;
    const nav = hideNav ? { navigation: false } : {};
    const page = hidePage ? { pagination: false } : {};
    const { pageDatas, style } = this.getPageDatas();

    return (
      <Wrapper {...this.props} maxWidth maxHeight>
        <Swiper
          className={classNames(s.sliderwrap, classes.sliderWrap)}
          ref={this.swiper}
          mousewheel={true}
          direction={direction}
          speed={speed}
          onSlideNextTransitionStart={this.onStart}
          autoplay={autoplay ? {
            delay: delay,
            disableOnInteraction: breakInterface,
          } : false}
          loop={loop}
          {...effect as any}
          {...nav}
          {...page}
          onInit={(e) => this.swiper = e}
        >
          {pageDatas.map((item, index) =>
            <SwiperSlide
              key={index}
              className={classNames(s.swiperslide, classes.slideItem)}
              style={style()}
              onClick={this.onClickImg(item, index)}
            >
              {
                isUrl(item.data || '') ?
                  <img className={classNames(s.content, classes.content)} src={item.data} alt={`slide${index}`} /> :
                  <div className={classNames(s.content, classes.content)}>{item.data}</div>
              }
            </SwiperSlide>)}
        </Swiper>
      </Wrapper>
    )
  }
}

// typeof State
type State = {
  datas: Datas[];
  delay: number,
  hideNav: boolean,
  hidePage: boolean,
  breakInterface: boolean,
  autoplay: boolean,
  loop: boolean,
  speed: number,
  effect: { [key: string]: any },
  reSetSW: boolean,
  direction: string,
}

export type SliderProps = ModuleBaseProps<
  { [keys in ClassesKey]: string; },
  { [keys in ExposeEventsKeys]: Function; }
>

export default PresetModule<SliderProps>(Slider, config, createStyles)
