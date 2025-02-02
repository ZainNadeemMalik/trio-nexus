import styles from "./LawPage.module.css"
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Header/Footer/Footer";
import { Link } from "react-router-dom";



export const LawPage = () => {
  return (
    <>
    <Header />
    <div className={styles.lawPage}>

      {/* <section className={styles.heading}>
        <h1 className={styles.headingTitle}>Trio Law Consultants</h1>
      </section> */}

      <section className={styles.hero}>
        
        <div>
        <h1 className={styles.headingTitle}>Trio Law Consultants</h1>

<p>We offer comprehensive legal solutions, covering corporate, financial, 
commercial, and individual legal needs. </p>

<Link to="/contact" className={styles.callToActionBtn}>Contact Us</Link>
        </div>
    
        {/* <div className={styles.lawPageImageContainer}>
          <img src={triolawpagephoto} alt="law-page-img" />
        </div> */}

      </section>

      {/* Corporate and business law */}


      <div className={styles.serviceGrid}>
  <h2>Our Services</h2>

<div className={styles.serviceGridWrapper}>
      <section className={styles.corporateAndBusinessLaw}>
        
        <h3 className={styles.corporateAndBusinessLawHeading}>Corporate & Business Law </h3>

        <ul className={styles.corporateAndBusinessLawList}>
          <li>Company Formation & Registration (LLCs, Private Ltd., Public Ltd.)</li>
          <li>Corporate Compliance & Regulatory Advisory</li>
          <li>Contract Drafting, Vetting & Negotiation</li>
          <li>Mergers, Acquisitions & Joint Ventures</li>
          <li>Corporate Litigation & Arbitration</li>
        </ul>

      </section>

{/* banking and financial law */}

      <section className={styles.bankingAndFinancialLaw}>
        
        <h3 className={styles.bankingAndFinancialLawHeading}>Banking & Financial Law</h3>
        
        <ul className={styles.bankingAndFinancialLawList}>
          <li>Banking Regulations & Compliance</li>
          <li>Financial Dispute Resolution & Litigation</li>
          <li> Loan & Mortgage Legal Advisory</li>
          <li> Anti-Money Laundering (AML) Compliance</li>
          <li> Cryptocurrency & Fintech Legal Advisory</li>
        </ul>

      </section>

      {/* civil and commercial litigation */}

      <section className={styles.civilAndCommercialLitigation}>
        
        <h3 className={styles.civilAndCommercialLitigation}>Civil & Commercial Litigation</h3>
        
        <ul className={styles.civilAndCommercialLitigationList}>
          <li>Contract Disputes & Breach of Agreement Cases</li>
          <li>Consumer Protection & Trade Disputes</li>
          <li>Landlord-Tenant Disputes & Real Estate Litigation</li>
          <li>Tort & Negligence Cases</li>
        </ul>

      </section>

      {/* family and personal law */}

      <section className={styles.familyAndPersonalLaw}>
        
        <h3 className={styles.familyAndPersonalLawHeading}>Family & Personal Law</h3>
        
        <ul className={styles.familyAndPersonalLawList}>
          <li>Divorce, Child Custody & Maintenance Cases</li>
          <li>Inheritance & Succession Planning</li>
          <li>Guardianship & Adoption Legal Services</li>
        </ul>

      </section>

      {/* executional legal services */}

      <section className={styles.executionalLegalServices}>
        
        <h3 className={styles.executionalLegalServicesHeading}>Executional Legal Services</h3>
        
        <ul className={styles.executionalLegalServicesList}>
          <li>Court Order Enforcement (Decrees, Injunctions, Recovery Orders)</li>
          <li>Debt Recovery & Execution of Financial Claims</li>
          <li>Legal Notices & Demand Letters</li>
        </ul>

      </section>

      {/* intellectual property law */}

      <section className={styles.intellectualPropertyLaw}>
        
        <h3 className={styles.intellectualPropertyLawHeading}>Intellectual Property Law</h3>
        
        <ul className={styles.intellectualPropertyLawList}>
          <li>Trademark & Copyright Registration & Litigation</li>
          <li>Patent Filing & Protection</li>
          <li>IP Contractual Licensing & Assignments</li>
        </ul>

      </section>

      {/* international legal services */}

      <section className={styles.internationalLegalServices}>
        
        <h3 className={styles.internationalLegalServicesHeading}>International Legal Services</h3>
        
        <ul className={styles.internationalLegalServicesList}>
          <li>Foreign Investments & Business Setup</li>
          <li>Cross-Border Dispute Resolution</li>
          <li>International Arbitration & Treaty Compliance</li>
        </ul>

      </section>

      </div>
      </div>

    </div>
    
    <Footer />
    </>
  )
}