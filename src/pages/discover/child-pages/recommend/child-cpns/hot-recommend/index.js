import React, { memo, useEffect } from 'react';
import {useSelector, useDispatch, shallowEqual} from "react-redux";

import { HotRecommendWrapper } from './style'
import { ThemeHeaderRCM } from "@/components/theme-header-rcm"
import SongsCover from "@/components/songs-cover"

import { getHotRecommendAction } from "../../store/actionCreators"

export default memo(function HotRecommend() {
  // state、props
  const songsProps = {
    source: false,
    ellipsis: false
  }

  // redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual);

  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRCM title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']}/>
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return <SongsCover key={item.id} info={item} {...songsProps}/>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
