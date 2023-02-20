import { Trash,ThumbsUp } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps{
  content: string;
  onDeleteComment:(commentToDelete: string) => void;
}
export function Comment({content, onDeleteComment }:CommentProps){
  const [likeCount, setLikeCount] = useState(0);
  function handDeleteComment(){
    onDeleteComment(content);
  }
  function handleLikeComment(){
    setLikeCount((state) =>{
      return state + 1
    }); 
  }
  return(
    <div className={styles.comment}>
      <Avatar 
        // src="https://github.com/nadiduno.png"
        hasBorder={false}
        //Posso não enviar as propiedades porque coloque uma Features de ES6 (Defaut Parameters) como argumento que recebem as propiedades
        //Em caso de não enviar o src coloca um avatar predefinido no props.src
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authotAndTime}>
              <strong>Fulanito</strong>
              <time
                title="28 de janeiro às 08:13h"
                dateTime="2023-01-28 08:13:30"
              >
              {' '}Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Like
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}