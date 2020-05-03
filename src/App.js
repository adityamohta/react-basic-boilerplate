//External Imports
import React from 'react';
import {Route, Switch} from 'react-router';

//My Imports
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

    static propTypes = {};

    render() {
        return (
            <Switch>
                {
                    routes.map(
                        (route, index) => <Route key={index} {...route} />
                    )
                }
            </Switch>
        );
    }
}

export default App;
