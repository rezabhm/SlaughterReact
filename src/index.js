import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import MainPage from './components/core/Main';
import {createRoot} from "react-dom/client";
import OrderList from "./components/slaughterManage/LiveWeighBridge/orderList";
import LiveDriverList from "./components/slaughterManage/LiveWeighBridge/LiveDriverList";
import NewOrder from "./components/slaughterManage/LiveWeighBridge/newOrder";
import OrderLevel from "./components/slaughterManage/LiveWeighBridge/OrderLevel";
import ReportLiveWeighBridge from "./components/slaughterManage/Report/LiveWeighBridge";
import PrintReportLiveWeighBridge from "./components/slaughterManage/Report/PrintReportLiveWeighBridge";
import PrintReportLevel from "./components/slaughterManage/LiveWeighBridge/PrintReportLevel";
import WatchMan from "./components/slaughterManage/LiveWeighBridge/WatchMan";
import Production from './components/slaughterManage/Production/production';
import ProductionReportGeneralChicken from './components/slaughterManage/ProductionReport/ProductionReportGeneralChicken';
import ProductionReportGeneralTurkey from './components/slaughterManage/ProductionReport/ProductionReportGeneralTurkey';
import ProductionReportGeneralQuail from './components/slaughterManage/ProductionReport/ProductionReportGeneralQuail';
import ProductionReportDetailChicken from './components/slaughterManage/ProductionReport/ProductionReportDetailChicken';
import ProductionReportDetailTurkey from './components/slaughterManage/ProductionReport/ProductionReportDetailTurkey';
import ProductionReportDetailQuail from './components/slaughterManage/ProductionReport/ProductionReportDetailQuail';
import SaleWatchMan from './components/slaughterManage/Sale/Watchman';
import './index.css';

const main = createRoot(document.getElementById('root'));


main.render(

    <Router>
            <Routes>
                
                <Route  path='/' element={<MainPage  />} />

                <Route  path='/order/list/' element={<OrderList />} />
                <Route  path='/watchman/order/list/' element={<WatchMan />} />
                <Route  path='/live/driver/list/' element={<LiveDriverList />} />
                <Route path='/new/order/' element={<NewOrder />}  />
                <Route path='/live/weighbridge/' element={<OrderLevel />}  />
                <Route path='/report/live/weighbridge/' element={<ReportLiveWeighBridge />}  />
                <Route path='/report/print/live/weighbridge/' element={<PrintReportLiveWeighBridge />}  />
                <Route path='/print/live/weighbridge/' element={<PrintReportLevel />}  />

                <Route path='/production/' element={<Production />}  />                
                <Route path='/production/Report/general/chicken/' element={<ProductionReportGeneralChicken />}  />
                <Route path='/production/Report/general/turkey/' element={<ProductionReportGeneralTurkey />}  />
                <Route path='/production/Report/general/quail/' element={<ProductionReportGeneralQuail />}  />
                <Route path='/production/Report/detail/chicken/' element={<ProductionReportDetailChicken />}  />
                <Route path='/production/Report/detail/turkey/' element={<ProductionReportDetailTurkey />}  />
                <Route path='/production/Report/detail/quail/' element={<ProductionReportDetailQuail />}  />

                <Route path='/sale/watchman/car/list/' element={<SaleWatchMan d={'d'} />}  />

            </Routes>
    </Router>

);
