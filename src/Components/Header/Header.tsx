import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'


export const Header = () => {
    return (
        <header>
            <nav className={styles.nav} >
                <NavLink to={'/todos'}
                    style={({ isActive }) => {
                        return { backgroundColor: isActive ? 'rgb(44, 67, 219)' : '' }
                    }}>Todos</NavLink>
                <NavLink to={'/button'}
                    style={({ isActive }) => {
                        return { backgroundColor: isActive ? 'rgb(44, 67, 219)' : '' }
                    }}>Button</NavLink>
                <NavLink to={'/dropdown'}
                    style={({ isActive }) => {
                        return { backgroundColor: isActive ? 'rgb(44, 67, 219)' : '' }
                    }}>DropDown</NavLink>
            </nav>
        </header>
    )
}

