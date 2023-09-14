import './brands.css';
import hm from'./../../img/brands/HM.png'
import Obey from'./../../img/brands/Obey.png'
import Shopify from'./../../img/brands/Shopify.png'
import Lacoste from'./../../img/brands/Lacoste.png'
import Levis from'./../../img/brands/Levis.png'
import Amazon from'./../../img/brands/Amazon.png'


const Brands = () => {
    return ( <section className="brands">
        <div className="container">
            <ul className='brands__list'>
                <li><a href="#!"><img src={hm} alt="" /></a></li>
                <li><a href="#!"><img src={Obey} alt="" /></a></li>
                <li><a href="#!"><img src={Shopify} alt="" /></a></li>
                <li><a href="#!"><img src={Lacoste} alt="" /></a></li>
                <li><a href="#!"><img src={Levis} alt="" /></a></li>
                <li><a href="#!"><img src={Amazon} alt="" /></a></li>
            </ul>
        </div>
    </section> );
}
 
export default Brands;