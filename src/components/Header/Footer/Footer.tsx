import styles from "./Footer.module.css"


export const Footer = () => {
 return (
  <footer className={styles.footer}>
    <p>trionexus</p>
    {/* <p>The Ultimate Nexus for Legal, Educational, and IT Services</p> */}

    <div className={styles.footerColumn}>

      <div className={styles.footerContact}>
        <p>+92-000-000000-0</p>
        <p>trionexus4@gmail.com</p>
    </div>

    <div className={styles.footerSocials}>
      <div><a href="#"><img src="" alt="" /></a>facebook-icon</div>
      <div><a href="#"><img src="" alt="" /></a>instagram-icon</div>
      <div><a href="#"><img src="" alt="" /></a>gmail-icon</div>
    </div>

    <div className={styles.footerSocials}>
      <div><a href="#"><img src="" alt="" /></a>facebook-icon</div>
      <div><a href="#"><img src="" alt="" /></a>instagram-icon</div>
      <div><a href="#"><img src="" alt="" /></a>gmail-icon</div>
    </div>

    <div className={styles.footerSocials}>
      <div><a href="#"><img src="" alt="" /></a>facebook-icon</div>
      <div><a href="#"><img src="" alt="" /></a>instagram-icon</div>
      <div><a href="#"><img src="" alt="" /></a>gmail-icon</div>
    </div>

    </div>
  </footer>
 )
}