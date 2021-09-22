import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { getSizeImage } from '@/utils/format-utils';
import { getSongDetailAction } from '@/pages/player/store';

import { TopRankingWrapper } from './style';

export default memo(function TopRanking(props) {
  // props and state
  const { info } = props;
  const { tracks = [] } = info;

  // redux hooks
  const dispatch = useDispatch();

  // other handle
  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  }

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)} alt="" />
          <a title={info.name} href="localhost:3000" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="localhost:3000">{info.name}</a>
          <div>
            <button title="播放" className="btn play sprite_02"></button>
            <button title="收藏" className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <a href="localhost:3000" 
                     className="name text-nowrap" 
                     title={item.name}>
                    {item.name}
                  </a>
                  <div className="operate">
                    <button title="播放" className="btn sprite_02 play" onClick={e => playMusic(item)}></button>
                    <button title="添加到播放列表" className="btn sprite_icon2 addto"></button>
                    <button title="收藏" className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <a href="localhost:3000">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
})
