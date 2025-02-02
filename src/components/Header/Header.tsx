import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import triologo from '../../assets/triologo.jpg';



export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <Link to="/" className={styles.trioLogo}>
          <img src={triologo} alt="trio-logo" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/law">Legal</Link>
        <Link to="/education">Education</Link>
        <Link to="/tech">IT</Link>
      </nav>
    </header>
  )
}