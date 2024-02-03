import React, { useState } from 'react'
import styles from './css/contact.module.css'
export default function Contact() {
 const [lengthOfUserNameInputs, setLengthOfUserNameInputs] = useState(true)
 const [lengthOfuserAgeInputs, setLengthOfuserAgeInputs] = useState(true)
 const [lengthOfuserEmailInputs, setLengthOfuserEmailInputs] = useState(true)
 const [lengthOfuserPasswordInputs, setLengthOfuserPasswordInputs] = useState(true)

  function showUserNameMessage(e){
    const lengthOf = e.target.value.length
    if(lengthOf >= 1){
      setLengthOfUserNameInputs(false)
    }else{
      setLengthOfUserNameInputs(true)
    }
    
  }
  function showUserAgeMessage(e){
    const lengthOf = e.target.value.length
    if(lengthOf >= 1){
      setLengthOfuserAgeInputs(false)
    }else{
      setLengthOfuserAgeInputs(true)
    }
    
  }
  function showUserEmailMessage(e){
    const lengthOf = e.target.value.length
    if(lengthOf >= 1){
      setLengthOfuserEmailInputs(false)
    }else{
      setLengthOfuserEmailInputs(true)
    }
    
  }
  function showUserPasswordMessage(e){
    const lengthOf = e.target.value.length
    if(lengthOf >= 1){
      setLengthOfuserPasswordInputs(false)
    }else{
      setLengthOfuserPasswordInputs(true)
    }
    
  }

  return (
    <>
     <div className={styles.main}>
        <p className={styles.contact_Header}>contact section</p>
        <span className={styles.star}><i className="fa-solid fa-star fs-3"></i></span>
        <div className="container row d-flex justify-content-center p-5">
          <div className="col-sm-8">
          <div className="my-5 position-relative z-3">
            <span className={ lengthOfUserNameInputs ? `${styles.topOfInput} ${styles.changeTop}` : styles.topOfInput}>userName:</span>
            <input type="text"onInput={showUserNameMessage} className={styles.form_inputs} placeholder='userName'/>
          </div>

          <div className="my-5 position-relative z-3">
          <span className={ lengthOfuserAgeInputs ? `${styles.topOfInput} ${styles.changeTop}` : styles.topOfInput}>userAge:</span>
            <input type="number" onInput={showUserAgeMessage} className={styles.form_inputs} placeholder='userAge'/>
          </div>
          
          <div className="my-5 position-relative z-3">
          <span className={ lengthOfuserEmailInputs ? `${styles.topOfInput} ${styles.changeTop}` : styles.topOfInput}>userEmail:</span>
            <input type="email" onInput={showUserEmailMessage} className={styles.form_inputs} aria-describedby="emailHelp" placeholder='userEmail'/>
          </div>

          <div className="my-5 position-relative z-3">
          <span className={ lengthOfuserPasswordInputs ? `${styles.topOfInput} ${styles.changeTop}` : styles.topOfInput}>userPassword:</span>
            <input type="password" onInput={showUserPasswordMessage} className={styles.form_inputs} placeholder='userPassword'/>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}
