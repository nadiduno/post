import styles from './Header.module.css'
import devpostlogo from '../assets/devpostlogo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={devpostlogo} alt="Logotipo do DevPost" />
    </header>
  )
}
