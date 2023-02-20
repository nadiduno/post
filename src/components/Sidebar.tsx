import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'


export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
       <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1441015401724-70d16b783f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
        alt="Foto de Menina no computador"
       />
       <div className={styles.profile}>
        <Avatar 
          src="https://github.com/nadiduno.png"
          hasBorder
        />
        <strong>Nadi Duno</strong>
        <span>DevRel | Web Developer</span>
       </div>
       <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
       </footer>
    </aside>
  );
}