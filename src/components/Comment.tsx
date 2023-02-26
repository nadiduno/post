import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
  content: string
  onDeleteComment: (commentToDelete: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)
  function handDeleteComment() {
    onDeleteComment(content)
  }
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authotAndTime}>
              <strong>Fulano</strong>
              <time
                title="20 de fevereiro às 03:02h"
                dateTime="2023-02-20 03:02:30"
              >
                {/* {' '}Cerca de 1h atrás */}
              </time>
            </div>
            <button onClick={handDeleteComment} title="Deletar comentário">
              <Trash size={24} />
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
  )
}
