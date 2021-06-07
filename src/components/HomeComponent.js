import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div className="mainContent">
                <div className = "mainContent__navBar">
                    <ul className="mainContent__nav">
                        <li><a href='#'>Besteck</a></li>
                        <li><a href='#'>Geschirr</a></li>
                        <li><a href='#'>Dekoration</a></li>
                        <li><a href='#'>Geschenk</a></li>
                    </ul>
                    <form method="post">
                        <button> 
                            <svg className="mainContent__nav__svg"><use href={"assets/search.svg#search"}></use></svg>
                        </button> 
                        <input type="text" name="searchLabel" placeholder="Searching"/>                      
                    </form>
                </div>               
                <Carousel className="carousel" showThumbs={false} showArrows={true}>                
                    <figure>
                        <figcaption>
                            <div className = "carousel__description">                                
                                <span>Tee Set</span><br/>
                                <span className="carousel__descriptionBrand">Brand Luts</span> <br/>
                                <span className="carousel__descriptionNew">New</span>                                                           
                            </div>
                        </figcaption>
                        <img className="carouselImg" src={"assets/figures/geschirrSet1.jpg"} alt="luts"/>                        
                    </figure>                      
                    <figure>
                        <figcaption>
                            <div className = "carousel__description">
                                <span>Becher Deutschland</span><br/>
                                <span className="carousel__descriptionBrand">Brand Axaio</span> <br/>
                                <span className="carousel__descriptionNew">Casual</span>
                            </div>
                        </figcaption>
                        <img className="carouselImg" src={"assets/figures/geschirr2.jpg"} alt="axaio"/>                        
                    </figure>
                    <figure>
                        <figcaption>
                            <div className = "carousel__description">
                                <span>Figur "Tanz"</span><br/>
                                <span className="carousel__descriptionBrand">Brand Blooming</span> <br/>
                            </div>
                        </figcaption>
                        <img className="carouselImg" src={"assets/figures/IMG_7683.jpg"} alt="blooming"/>                        
                    </figure>          
                </Carousel>
                <div className="mainContent__container">
                    <div className = "mainContent__container__items__options">
                        <button>
                            <figure>
                                <figcaption>Preis</figcaption>
                                <svg><use href={"assets/down-arrow.svg#down-arrow"}></use></svg>                            
                            </figure>
                        </button>
                        <button>
                            <figure>
                                <figcaption>Farbe</figcaption>
                                <svg><use href={"assets/down-arrow.svg#down-arrow"}></use></svg>                                
                            </figure>
                        </button>
                        <button>
                            <figure>
                                <figcaption>Neue Kollektion</figcaption>
                                <svg><use href={"assets/down-arrow.svg#down-arrow"}></use></svg>                                
                            </figure>
                        </button>
                        <button>
                            <figure>
                                <figcaption>Rabbatt</figcaption>
                                <svg><use href={"assets/down-arrow.svg#down-arrow"}></use></svg>                                
                            </figure>
                        </button>
                        <button>
                            <figure>
                                <figcaption>Brand</figcaption>
                                <svg><use href={"assets/down-arrow.svg#down-arrow"}></use></svg>                                
                            </figure>
                        </button>
                    </div>
                    <div className = "mainContent__container__items">
                        <div className="mainContent__container__items__row">
                            <div className = "mainContent__container__items__item">
                                <figure>
                                    <img src="assets/figures/figur1.jpg" alt="scsd"/>
                                    <figcaption>
                                        <div>Luis</div>
                                        <div>189€</div>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className = "mainContent__container__items__item">
                                <figure>
                                    <img src="assets/figures/figur2.JPG" alt="scsd"/>
                                    <figcaption>
                                        <div>Axaio</div>
                                        <div>19€</div>
                                    </figcaption>
                                </figure>                                
                            </div>
                            <div className = "mainContent__container__items__item">
                                <figure>
                                <img src="assets/figures/figur3.JPG" alt="scsd"/>
                                    <figcaption>
                                        <div>Vend</div>
                                        <div>75€</div>
                                    </figcaption>
                                </figure>                                
                            </div>
                            <div className = "mainContent__container__items__item">
                                <figure>
                                    <img src="assets/figures/figur4.JPG" alt="scsd"/>
                                    <figcaption>
                                        <div>Cartl</div>
                                        <div>229€</div>
                                    </figcaption>
                                </figure>                                
                            </div>
                        </div>
                        <div className="mainContent__container__items__row">
                            <div className = "mainContent__container__items__item">
                                <figure>
                                <img src="assets/figures/figur5.JPG" alt="scsd"/>
                                    <figcaption>
                                        <div>Jokart</div>
                                        <div>43€</div>
                                    </figcaption>
                                </figure>                                
                            </div>
                            <div className = "mainContent__container__items__item">
                                <figure>
                                <img src="assets/figures/figur6.JPG" alt="scsd"/>
                                    <figcaption>
                                        <div>Portoj</div>
                                        <div>189€</div>
                                    </figcaption>
                                </figure>                                
                            </div>
                            <div className = "mainContent__container__items__item">
                                <figure>
                                    <img src="assets/figures/figur7.JPG" alt="scsd"/>
                                        <figcaption>
                                            <div>Gadod</div>
                                            <div>3089€</div>
                                        </figcaption>
                                </figure>                                
                            </div>
                            <div className = "mainContent__container__items__item">
                                <figure>
                                    <img src="assets/figures/figur8.JPG" alt="scsd"/>
                                    <figcaption>
                                        <div>Regbit</div>
                                        <div>86€</div>
                                    </figcaption>
                                </figure>                                
                            </div>
                        </div>                       
                    </div>
                </div>
            </div>
        );
    }    
} 
export default Home;