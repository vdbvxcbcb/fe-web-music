import React, { memo } from 'react';
import { Provider } from "react-redux";
import { renderRoutes } from 'react-router-config';

import routes from './router';
import store from "./store";

import AppHeader from "components/app-header";
import AppFooter from "components/app-footer";
import AppPlayerBar from './pages/player/app-player-bar';
import { HashRouter } from 'react-router-dom';

export default memo(function App() {
  return (
    // 使用 Provider，让包裹的组件使用 connect 来获取 store 的数据
    <Provider store={store}>
      <HashRouter>
        <AppHeader/>
        {renderRoutes(routes)}
        <AppFooter/>
        <AppPlayerBar/>
      </HashRouter>
    </Provider>
  )
})
