import React, { memo ,useEffect} from 'react'
import HYTopBanner from './c-cpns/top-banner'
import HYHotRecommend from './c-cpns/hot-recommend'
import HYNewAlbum from './c-cpns/new-album'
import HYRecommendRanking from './c-cpns/recomment-ranking'
import {RecommendWrapper,Content, RecommendLeft,RecommendRight} from './style'
function HYRecommend(props) {
  return (
    <RecommendWrapper>
    <HYTopBanner></HYTopBanner>
    <Content>
      <RecommendLeft>
        <HYHotRecommend></HYHotRecommend>
        <HYNewAlbum></HYNewAlbum>
        <HYRecommendRanking></HYRecommendRanking>
      </RecommendLeft>
      <RecommendRight></RecommendRight>
    </Content>
    </RecommendWrapper>
  )
}
 
export default (memo(HYRecommend))
