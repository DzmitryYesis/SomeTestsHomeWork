import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './RenderRoutes';
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.nav}>
            <NavLink className={({isActive}) => isActive ? s.itemA : s.itemN} to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
            <NavLink className={({isActive}) => isActive ? s.itemA : s.itemN} to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink className={({isActive}) => isActive ? s.itemA : s.itemN} to={PATH.JUNIOR_PLUS}>Junior-Plus</NavLink>

        </div>
    )
}

export default Header
