import React from 'react'
import styles from './css/footer.module.css'
export default function Footer() {
  return (
    <>
    <div className="bg-dark bg-gradient text-center text-light p-3 w-100">
        <div className="row">
          <div className="col-md-4">
            <article>
              <h3 className=' text-capitalize'>location</h3>
              <p>2215 john daniel drive</p>
              <p>Clark,Mo 65243</p>
            </article>
          </div>

          <div className="col-md-4">
            <article>
              <h3 className=' text-capitalize'>around the web</h3>
             <ul className='list-unstyled d-flex justify-content-center'>
              <li className={styles.social}><i className="fa-brands fa-facebook"></i></li>
              <li className={styles.social}><i className="fa-brands fa-twitter"></i></li>
              <li className={styles.social}><i className="fa-brands fa-linkedin-in"></i></li>
              <li className={styles.social}><i className="fa-solid fa-globe"></i></li>
             </ul>
            </article>
          </div>

          <div className="col-md-4">
            <article>
              <h3 className=' text-capitalize'>about freelancer</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </article>
          </div>
        </div>
    </div>
    <div className="bg-dark text-center text-light p-3 w-100">
        <p className="fs-6">Copyright &copy; Your Website 2021</p>
    </div>
    </>
  )
}
