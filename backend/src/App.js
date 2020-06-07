import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import NoMatch from './components/NoMatch';
import Layout from './components/ui/Layout';

const App = () => {

    return (
        <Switch>
            {routes.map(
                ({ path, exact, component: Component, ...rest }) => (
                    <Route
                        key={path}
                        path={path}
                        exact={exact}
                        render={props => (
                            <Layout>
                                <Component {...props} {...rest} />
                            </Layout>
                        )}
                    />
                )
            )}
            <Route
                render={props => (
                    <Layout><NoMatch {...props} /></Layout>
                )}
            />
        </Switch>
    )
}

export default App;
