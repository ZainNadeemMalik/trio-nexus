import { Link } from "react-router-dom"
import styles from "./HomePage.module.css"
import triologo from '../../assets/triologo.jpg';

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
{/* correct this img source */}
      <div className={styles.logoContainer}>
        <img src={triologo} alt="trio-logo" />
      </div>
      
<div className={styles.titleContainer}>
      <h1 className={styles.title}>Trio Nexus</h1>

</div>

      <p className={styles.serviceText}>What we can do for you:</p>

      <ul className={styles.servicesList}>
        <li className={styles.law}>
          <Link to="/law">Legal - Services</Link>
        </li>

        <li className={styles.education}>
          <Link to="/education">Education - Services</Link>
        </li>

        <li className={styles.tech}>
          <Link to="/tech">IT - Services</Link>
        </li>
      </ul>
    </div>
  )
}