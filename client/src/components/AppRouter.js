import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";

const AppRouter = () => {

    const {user} = useContext(Context)

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, component}) =>
                <Route
                    key={path}
                    element= {component}
                    path={path}
                    exact
                />
            )}
            {publicRoutes.map(({path, component}) =>
                <Route
                    key={path}
                    element= {component}
                    path={path}
                    exact
                />
            )}
        <Route path="*" element={<Navigate replace to="/" />} />
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