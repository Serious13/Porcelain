import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab)

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
                    <h3>Copyright © 2021 Arseniy</h3>
                   <div className="footer__social">
                       <h3>Get in touch</h3>
                        <ul>
                            <li><FontAwesomeIcon icon={['fab', 'facebook']} id = "facebook"/></li>                            
                            <li><FontAwesomeIcon icon={['fab', 'twitter']} id = "twitter"/></li>
                            <li><FontAwesomeIcon icon={['fab', 'youtube']} id = "youtube"/></li>
                        </ul>
                   </div>
                   <div className="footer__payment">
                       <h3>Bezahlen</h3>
                        <ul>
                            <li><FontAwesomeIcon icon={['fab', 'cc-mastercard']} id = "mastercard"/></li>
                            <li><FontAwesomeIcon icon={['fab', 'cc-visa']} id = "visa" /></li>
                            <li><FontAwesomeIcon icon={['fab', 'cc-paypal']} id = "paypal"/></li>
                            <li><FontAwesomeIcon icon={['fab', 'bitcoin']} id = "bitcoin"/></li>
                        </ul>
                   </div>
                  
                </div>
            </React.Fragment>
        )
    }
}  

export default Footer;