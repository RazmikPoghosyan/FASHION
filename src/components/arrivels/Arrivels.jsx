import Card from '../card/Card';
import './arrivels.css';
import cat01Img from './../../img/arrivels/01.jpg'
import cat02Img from './../../img/arrivels/02.jpg'
import cat03Img from './../../img/arrivels/03.jpg'

const Arrivels = () => {
    return (<section className='arrivels'>
        <div className="container">
        <div className="arrivels__header">
            <h2 className='title-2'>NEW ARRIVALS</h2>
        </div>
        <div className="arrivels__cards">
            <Card title="Hoodies & Sweetshirt" img={cat01Img} />
            <Card title="Coats & Parkas" img={cat02Img} />
            <Card title="Tees & T-Shirt"img={cat03Img} />
           
            
        </div>
            
            </div> </section>);
}
 
export default Arrivels;