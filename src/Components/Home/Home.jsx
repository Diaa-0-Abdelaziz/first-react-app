import React from 'react'
import styles from './css/home.module.css'
export default function Home() {
  return (
    <>
     <div className={styles.main}>
     <div className={styles.main_animate_content}>
            <div className={styles.circle}>
            <i className="fa-brands fa-html5"></i>
            </div>
            <div className={styles.circle2}>
            <i className="fa-brands fa-css3-alt"></i>
            </div>
             <div className={styles.circle3}>
             <i className="fa-brands fa-square-js"></i>
             </div>
             <div className={styles.circle4}>
             <i className="fa-brands fa-bootstrap"></i>
             </div>
             <div className={styles.circle5}>
            <i className="fa-brands fa-react"></i>
             </div>
             <div className={styles.circle6}>
             <i className="fa-brands fa-sass"></i>
             </div>
             <div className={styles.circle7}>
             <p>JQUERY</p>
             </div>
             <div className={styles.circle_center}>
             <div className={styles.img}></div>
             </div>
          </div>   
        
        <p className={styles.home_Message}>start framework</p>
        <span className={styles.star}><i className="fa-solid fa-star fs-3"></i></span>
        <p className='text-light'>Graphic Artist - Web Designer - Illustrator</p>
     </div>
    </>
  )
}
