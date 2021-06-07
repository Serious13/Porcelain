import React, {Component} from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path = "/home" component = {Home}/>
                    <Redirect to="/home"/>
                </Switch>                
            </BrowserRouter>
        )
    }
}
export default Main;