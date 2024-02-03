import React from 'react'
import styles from './css/notfound.module.css'
export default function Notfound() {
  return (
    <>
       <div className={styles.main}>
        <p className={styles.notfound_Header}>This page not found</p>
        <span className={styles.star}><i className="fa-solid fa-star fs-3"></i></span>
        <div className="container d-flex justify-content-center p-5">
        </div>
        </div>
    </>
  )
}
