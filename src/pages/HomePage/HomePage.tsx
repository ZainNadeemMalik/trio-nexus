import { Link } from "react-router-dom"
import styles from "./HomePage.module.css"
import triologo from '../../assets/triologo.jpg';
import { Footer } from "../../components/Header/Footer/Footer";
import triolawpagephoto from "../../assets/triolawpagephoto.jpg"

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

    <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/law">Legal</Link>
        <Link to="/education">Education</Link>
        <Link to="/tech">IT</Link>
      </nav>


      {/* <p className={styles.serviceText}>What we can do for you:</p> */}

      <ul className={styles.servicesList}>
        <li className={styles.law}>
          <Link to="/law">Legal - Services
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, saepe!</p>
          </Link>
        </li>

        <li className={styles.education}>
          <Link to="/education">Education - Services 
          
          </Link>
        </li>

        <li className={styles.tech}>
          <Link to="/tech">Technological - Services
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, perspiciatis?</p>
          </Link>
        </li>
      </ul>

{/* ---------------BLOG ARTICLES---------------  */}
{/* all these articles need to be generated programatically like the cart items via an articles component */}

      <section className={styles.blogArticles}>

        <h2 className={styles.blogArticlesTitle}>Our Blog Articles</h2>

        <div className={styles.blogArticle}>

          <div className={styles.blogArticleImageContainer}>
            <img src={triolawpagephoto} alt="article-image" />
          </div>

          <div className={styles.blogArticleText}>
            <h3>Title</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quod.</p>
          </div>

        </div>

        <div className={styles.blogArticle}>

      <div className={styles.blogArticleImageContainer}>
        <img src={triolawpagephoto} alt="article-image" />
      </div>

      <div className={styles.blogArticleText}>
        <h3>Title</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quod.</p>
      </div>

      </div>

  <div className={styles.blogArticle}>

    <div className={styles.blogArticleImageContainer}>
      <img src={triolawpagephoto} alt="article-image" />
    </div>

    <div className={styles.blogArticleText}>
      <h3>Title</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, quod.</p>
    </div>
  </div>

      </section>

      <Footer />
    </div>
  )
}