import styles from './layout.module.css'

export default function Layout({ children }) {
  return <img className={styles.container}>{children}</img>
}