"use client"
import styles from './contact.module.css'
import Image from 'next/image'

function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" fill alt="Contact image" className={styles.img}/>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}> 
          <input type="text" placeholder='First name and last name'/>
          <input type="text" placeholder='Email Address'/>
          <input type="text" placeholder='Phone Number (Optional)'/>
          <textarea name="" id="" placeholder='Message' rows='10' color='30'></textarea>
        <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
