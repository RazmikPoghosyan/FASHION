import './promo.css'
import promoImg from './../../img/header/header-img.jpg';

const Promo = () => {
    return (<section className="promo">
        <div className="container">
            <div className="promo__content">
                <div className="promo__text">
                    <div className="promo__title">
                        <span className='highlight'>
                            <span>LET’S</span>
                            </span>
                            EXPLORE 
                        <span className="highlight highlight--yelow">
                            <span>UNIQUE</span>
                            </span>
                            CLOTHES.</div>
                    <div className="promo__decs">Live for Influential and Innovative fashion!</div>
                    <div className="promo__btn-wrapper">
                        <a href="#!" className="promo__btn">Shop Now</a>
                    </div>
                </div>
                <div className="banner__img">
                    <img src={promoImg}  />
                </div>
            </div>
        </div>
    </section>);
}
 
export default Promo;