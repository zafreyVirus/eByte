"use client"
import { useRouter } from 'next/navigation';
import styles from './home.module.css';
import Image from 'next/image';



export default function Home() {

  const router = useRouter();

  const handleClick =()=>{
    router.push('/contact')
  }

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
<h1 className={styles.title}>Towards a digital future.</h1>
<p className={styles.desc}>
  We are a malawian tech company based in southern region, Blantyre. We offer various IT services, web development, IoT, Data analysis, Networking, mobile app development and many more...
  
</p>

<div className={styles.buttons}>
  <button className={styles.button}>Learn More</button>
  <button className={styles.button} onClick={handleClick}>Contact</button>
</div>

<div className={styles.brands}>
<Image src="/brands.png" alt="" fill className={styles.brandImag}/>
</div>
      </div>
      <div className={styles.imagContainer}>
        {/* <Image src="/hero.gif" fill className={styles.heroImg}/> */}
      </div>
    </div>
  )
}
