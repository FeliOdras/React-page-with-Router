import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="main-navigation">
            <ul>
                <li>Welcome</li>
                <li>About</li>
                <li>Info</li>
                <li>Credits</li>
            </ul>
        </nav>
    )
}

