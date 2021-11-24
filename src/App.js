import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import "@/assets/css/reset.css"
import routes from './router'
import store from './store'
import HYAppHeader from '@/components/app-header'
import HYAppFooter from '@/components/app-footer'
import {HashRouter} from 'react-router-dom'
import HYAppPlayerBar from './pages/palyer/app-player-bar'
export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
      <HYAppHeader></HYAppHeader>
      {renderRoutes(routes)}
     <HYAppFooter></HYAppFooter>
     <HYAppPlayerBar></HYAppPlayerBar>
    </HashRouter>
    </Provider>
  )
})
