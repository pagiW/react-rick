import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import App from './App';
import Character from './Character';
import Ok from './Ok';

const Main = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/react-rick' component={Ok} />
                <Route exact path='/react-rick/:page' component={App} />
                <Route exact path='/react-rick/:page/:created' component={Character} />
            </Switch>
        </BrowserRouter>
    );
}

export default Main;