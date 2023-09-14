import styles from './card.module.css';
import cat01Img from './../../img/arrivels/01.jpg'
import arrow from './../../img/icon/Arrow 1.svg'


const Card = (props) => {
    return ( 
    <div className={styles.card}>
        <a href="#!" className={styles.card__link}></a>
        <img 
        className={styles.card__img}
         src={props.img}
          alt="Category ..." />

        <div className={styles.card__body}>
        <div className={styles.card__text}>
            <div className={styles.card__title}>{props.title}</div>
            <div className={styles.card__muted}>Explore Now!</div>
            </div>
        <div className={styles.card__icon}>
                <img src={arrow} alt="Open" />
            </div>
        </div>
    </div> 
    )
}
 
export default Card;