import React, { memo ,useEffect,useRef,useState, useCallback} from 'react'
import { shallowEqual, useDispatch,useSelector } from 'react-redux'
import { getTopBannerAction } from '../../store/actionCreators'
import { BannerWrapper,BannerLeft,BannerRight,BannerControl } from './style'
import {Carousel} from 'antd'
export default memo(function HYTopBanner() {
  const [currentIndex,setCurrentIndex]=useState(0)
  const {topBanners} =  useSelector(state => ({
    topBanners: state.recommend.topBanners}),shallowEqual)
  const dispatch = useDispatch()
   useEffect(() => {
     dispatch(getTopBannerAction())
   }, [dispatch])
   const bannerRef = useRef()
   const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0);
  }, []);
   const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
        <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e=>bannerRef.current.prev()}
          ></button>
          <button className="btn right" onClick={e=>bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
