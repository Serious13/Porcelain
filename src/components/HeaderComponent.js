import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cnt:1
        };
    }
    render() {
        return(
            <React.Fragment>
                <div className="header">
                    <div className="header__info">
                            <div className="header__info__general">
                                <ul>
                                    <li>About us</li>
                                    <li>Order</li>
                                    <li>Contacts</li>
                                </ul>
                            </div>
                    </div>
                    <div className="header__logo">        
                        <h1>Porzellan</h1>
                                   
                    </div>   
                    <div className="header__socialBar">
                        <div className="header__loginForm">
                            <a href="#">Login</a>
                        </div>
                        <div className="header__favorites">
                            <svg><use href={'assets/herz.svg#herz'}></use></svg>
                        </div>
                        <div className="header__shoppingCart">
                            <svg><use href={'assets/bag.svg#bag'}>0</use></svg>              
                        </div>
                    </div>       
                    
                </div>
            </React.Fragment>
        )
    }
}  

export default Header;