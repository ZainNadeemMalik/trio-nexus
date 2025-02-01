import { Link } from "react-router-dom"
import styles from "./Header.module.css"


export const Header = () => {
  return (
    <header>
      <nav className={styles.headerNav}>
        <Link to="/">Home</Link>
        <Link to="/law">Legal</Link>
        <Link to="/education">Education</Link>
        <Link to="/tech">IT</Link>
      </nav>
    </header>
  )
}