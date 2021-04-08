import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cnt:1
        };
    }
    componentDidMount() {}
    render() {
        return(
            <div>
                <Header/>
                <Home/>
                <Footer/>
            </div>
        )
    }

}

export default Main;