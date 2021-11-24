import * as actionTypes from './constant'
const defaultState ={
  topBanners:[],
  hotRecommends: [],
  newAlbums:[],
  upRanking: {},
  newRanking: {},
  originRanking: {},
}
function reducer(state=defaultState,action) {
  switch(action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return  {...state,topBanners:action.topBanners}
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return { ...state,hotRecommends:action.hotRecommends}
    case actionTypes.CHANGE_NEW_ALBUM:
      return {...state,newAlbums:action.newAlbums}
    case actionTypes.CHANGE_UP_RANKING:
      return {...state,upRanking:action.upRanking};
    case actionTypes.CHANGE_NEW_RANKING:
      return {...state,newRanking: action.newRanking};
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return {...state,originRanking:action.originRanking};
    default:
      return state
  }
}
export default reducer