import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="main-navigation">
            <ul>
                <li>
                    <Link to="/">
                        Welcome
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/info">
                        Info
                    </Link>
                </li>
                <li>
                    <Link to="/credits">
                        Credits
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

