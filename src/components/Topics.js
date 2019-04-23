import React from 'react';
import { Link } from 'react-router-dom';

function Topics({ match }) {
    return (
        <React.Fragment>
            <h2>Topics</h2>
            <p>Here you can select your topic</p>
            <nav className="subnav">
                <ul>
                    <li>
                        <Link to={`${match.url}/components`}>
                            Components
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props`}>
                            Props
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/states`}>
                            States
                        </Link>
                    </li>
                </ul>
            </nav>
        </React.Fragment >
    )
}

export default Topics
