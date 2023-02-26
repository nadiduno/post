import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://github.com/nadiduno/post/blob/main/src/assets/frontendNadiDuno.jpg?raw=true"
        alt="Foto de Menina no computador"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/nadiduno.png" hasBorder />
        <strong>Nadi Duno</strong>
        <span>DevRel | Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
