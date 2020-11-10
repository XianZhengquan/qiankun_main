import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ILayout from 'Layout';

import Home from 'views/home';

const Router: React.FC = () => {

    return (
        <BrowserRouter>
            <Switch>
                <ILayout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </ILayout>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
