import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getTopBannerAction } from "../../store/actionCreators";

import { Carousel } from "antd";
import { 
  BannerWrapper, 
  BannerLeft, 
  BannerRight,
  BannerControl
} from './style';

export default memo(function TopBanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);

  // 组件和redux关联: 获取数据和进行操作
  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  // 其它 hooks
  const bannerRef = useRef();

  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])
  
  // 其它业务逻辑
  const bgImage = topBanners[currentIndex] && 
  (topBanners[currentIndex].imageUrl + '?imageView&blur=40x20')

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <a href="localhost:3000" className="banner-item" key={item.targetId}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </a>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <div className="btn left" onClick={e => {bannerRef.current.prev()}}></div>
          <div className="btn right" onClick={e => {bannerRef.current.next()}}></div>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
