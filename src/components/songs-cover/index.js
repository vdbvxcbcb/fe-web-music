import React, { memo } from 'react'

import { getCount, getSizeImage } from "@/utils/format-utils";

import { SongsCoverWrapper } from './style';

export default memo(function SongsCover(props) {
  const {info, source, ellipsis} = props;

  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <a href={info.picUrl} title={info.name} className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </a>
      </div>
      <div className={`title ${ellipsis ? 'text-nowrap' : ''}`}>
        {info.name}
      </div>
      {source &&
      <div className="cover-source text-nowrap">
        by {info.copywriter ? info.copywriter : info.creator.nickname}
      </div>}
    </SongsCoverWrapper>
  )
})
