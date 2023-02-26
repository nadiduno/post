import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}
export function Avatar({
  src = 'https://github.com/nadiduno/post/blob/main/src/assets/avatarcomicsneon.jpg?raw=true',
  hasBorder = true,
  ...props
}: AvatarProps) {
  return (
    <div>
      <img
        className={
          hasBorder ? styles.avatarWithBorder : styles.avatarWithoutBorder
        }
        src={src}
        alt="Avatar"
        {...props}
      />
    </div>
  )
}
