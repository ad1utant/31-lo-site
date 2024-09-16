import {Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from './Home.module.css';

const Slideshow = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1713200811001-af93d0dcdfc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",

  ];
  const properties = {
    prevArrow: <div/>,
    nextArrow: <div/>
  }
  return (
    <Fade {...properties} cssClass={styles.slideshow} autoplay={true}>
      {images.map((image,index) => (
        <div key={`slide${index}`} className={styles.slide}>
          <div key={`image${index}`} style={{ backgroundImage: `url(${image})` }} className={styles.image}/>
        </div>
      ))}
    </Fade>
  );
};

export default Slideshow;
