import React from 'react'
import styles from './css/about.module.css'
export default function About() {
  return (
    <>
    <div className={styles.main}>
    <p className={styles.about_Header}>about component</p>
        <span className={styles.star}><i className="fa-solid fa-star fs-3"></i></span>
        <div className='row text-light container text-start'>
          <div className="col-md-6">
            <p className='text-left'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-md-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>

        </div>
    </div>
    </>
  )
}
