import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="main-navigation">
            <ul>
                <li>
                    <NavLink to="/home">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/info">
                        Info
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/credits">
                        Credits
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/topics">
                        Topics
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

