import React, { useState } from 'react'
import styles from './css/portfolio.module.css'
import img1 from './imgs/1.PNG'
import img2 from './imgs/2.png'
import img3 from './imgs/3.PNG'
import img4 from './imgs/4.PNG'
import img5 from './imgs/5.PNG'
import img6 from './imgs/6.PNG'
const images = [img1, img2, img3, img4, img5, img6];
export default function Portfolio() {
   const [ShowImg, setShowImg] = useState(1);
   const [isCourselVisible, setIsCourselVisible] = useState(false);

   function display(index){
    setIsCourselVisible(true)
    setShowImg(index)
   }
   function closeWindow(e){
    // console.log(e.target)
    setIsCourselVisible(false)
    // e.target.classList.add("d-none")
   }
  return (
    <>
    <div className={styles.main}>
      
      

    <p className={styles.about_Header}>portfolio component</p>
        <span className={styles.star}><i className="fa-solid fa-star fs-3"></i></span>

        <div className="row container">
          {images.map((img, index)=>(
            <div key={index} className="col-lg-4 col-md-6 p-5">
            <div className={styles.card}>
              <img src={img} className="w-100" alt="" />
              <div className={styles.cover} onClick={() => display(index + 1)}>
              <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          ))}
        </div>
        <div className={`${styles.coursel} ${isCourselVisible? 'd-flex': 'd-none'}`} onClick={closeWindow}>
        
        <img src={images[ShowImg - 1]} className='w-75' alt="" />
  
        </div>
    </div>
    </>
  )
}
