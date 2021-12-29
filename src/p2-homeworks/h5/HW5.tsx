import React from 'react'
import Header from './Header'
import RenderRoutes from './RenderRoutes'
import {HashRouter} from 'react-router-dom';

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>

            <RenderRoutes/>

            </HashRouter>
        </div>
    )
}

export default HW5
