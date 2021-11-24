import React, { memo,useEffect,shallowEqual } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import HYThemeHeaderRCM from '@/components/theme-header-rcm'
import HYSongsCover from '@/components/songs-cover'
import {
  HotRecommendWrapper
} from './style'
import { getHotRecommendAction } from '../../store/actionCreators'
export default memo(function HYHotRecommend() {
  const {hotRecommends} =  useSelector(state => ({
    hotRecommends: state.recommend.hotRecommends}),shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotRecommendAction(8))
    
  }, [dispatch])
  return (
   <HotRecommendWrapper>
     <HYThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]}></HYThemeHeaderRCM>
     <div className="recommend-list">
       {
         hotRecommends.map((item,index)=>{
           return  <HYSongsCover key={item.id} info={item}></HYSongsCover>
         })
       }
     </div>
   </HotRecommendWrapper>
  )
})

