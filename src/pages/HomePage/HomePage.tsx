import { Link } from "react-router-dom"
import styles from "./HomePage.module.css"
import triologo from '../../assets/triologo.jpg';

export const HomePage = () => {
  return (
    <div className={styles.homePage}>

<section className={styles.title}>
      <div className={styles.logoContainer}>
        <img src={triologo} alt="trio-logo" />
      </div>
      
<div className={styles.titleTextContainer}>
      <h1 className={styles.titleText}>Trio Nexus</h1>
      <p>"We are result makers"</p>
</div>
</section>


      {/* <p className={styles.serviceText}>What we can do for you:</p> */}

      <ul className={styles.servicesList}>
        <li className={styles.law}>
          <Link to="/law">Legal<span>Services</span></Link>
        </li>

        <li className={styles.education}>
          <Link to="/education"><span>Education</span>Services</Link>
        </li>

        <li className={styles.tech}>
          <Link to="/tech"> <span>IT</span>Services</Link>
        </li>
      </ul>
    </div>
  )
}