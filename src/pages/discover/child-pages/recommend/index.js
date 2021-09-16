import React, { memo } from 'react';

import { 
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight 
} from  "./style"; 
import TopBanner from "./child-cpns/top-banner";
import HotRecommend from './child-cpns/hot-recommend';
import NewAlbum from './child-cpns/new-album';
import RecommendRanking from './child-cpns/recommend-ranking';
import UserLogin from './child-cpns/user-login';
import SettleSinger from './child-cpns/settle-singer';
import HotArtist from './child-cpns/hot-artist';

function Recommend(props) {

  return (
    <RecommendWrapper>
      {/* 轮播图 */}
      <TopBanner/>
      <Content className="wrap-v2 content">
        <RecommendLeft>
          {/* 热门推荐 */}
          <HotRecommend/>
           {/* 新碟上架 */}
          <NewAlbum/>
          {/* 榜单 */}
          <RecommendRanking/>
        </RecommendLeft>
        <RecommendRight>
          {/* 登录 */}
          <UserLogin />
          {/* 入驻歌手 */}
          <SettleSinger />
          {/* 热门主播 */}
          <HotArtist />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(Recommend);