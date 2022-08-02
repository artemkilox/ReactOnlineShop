import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes} from "../routes";

const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
            {authRoutes.map(route =>
            <Route
                key={route.id}
                element= {route.component}
                path={route.path}
                exact={route.exact}
            />
        )}
        <Route path="*" element={<Navigate replace to="/shop" />} />
        </Routes>
    );
};

export default AppRouter;



//     ? <Routes >
//         {privateRoutes.map(route =>
//             <Route
//                 key={route.id}
//                 element= {route.component}
//                 path={route.path}
//                 exact={route.exact}
//             />
//         )}
//         <Route path="*" element={<Navigate replace to="/posts" />} />
//     </Routes>