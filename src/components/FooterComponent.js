import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cnt:1
        };
    }
    render() {
        return(
            <React.Fragment>
                <div className="footer">
                   <div className="footer__social">
                       <h2>Get in touch</h2>
                        <ul>
                            <li><img src="assets/instagram.png" alt="instagram"/></li>
                            <li><FontAwesomeIcon icon="coffee" /></li>
                            <li><svg><use href={"assets/twitter.svg#twitter"}></use></svg></li>
                            <li><svg><use href={"assets/facebook.svg#facebook"}></use></svg></li>
                        </ul>
                   </div>
                   <div className="footer__impressum">

                   </div>
                   <div className="footer__datenschutz">

                   </div>
                   <div className="footer__payment">
                       <h2>Bezahlen</h2>
                        <ul>
                            <li>Card</li>
                            <li>Paypal</li>
                            <li>BTC</li>
                        </ul>
                   </div>
                </div>
            </React.Fragment>
        )
    }
}  

export default Footer;