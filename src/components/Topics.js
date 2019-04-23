import React from 'react';
import { Route, Link } from 'react-router-dom';

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
            {/*<Route path="/topics/components" render={() => <h3>You clicked components</h3>} />
            <Route path="/topics/props" render={() => <h3>You clicked props</h3>} />
            <Route path="/topics/states" render={() => <h3>You clicked states</h3>} />*/}
            <Route path={`${match.path}/:topic`} component={Topic} />
            <Route path={match.path} exact render={() => <h4>No topic selected</h4>} />
        </React.Fragment>
    )
}

function Topic({ match }) {
    return <h3>You clicked: {match.params.topic}</h3>
}
export default Topics
