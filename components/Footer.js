import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo-thana_business.svg" alt="Logo - THANA Business" className={styles.logo} />
      </footer>
    </>
  )
}
