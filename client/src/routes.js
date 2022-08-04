import Admin from "./pages/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Auth from "./pages/Auth";
import Shop from "./pages/Shop";
import React from "react";

export const authRoutes = [
    {id: 1, path: ADMIN_ROUTE, component: <Admin/>},
    {id: 2, path: BASKET_ROUTE, component: <Basket/>}
]

export const publicRoutes = [
    {id: 3, path: SHOP_ROUTE, component: <Shop/>},
    {id: 4, path: LOGIN_ROUTE, component: <Auth/>},
    {id: 5, path: REGISTRATION_ROUTE, component: <Auth/>},
    {id: 6, path: DEVICE_ROUTE + "/:id", component: <DevicePage/>}
]