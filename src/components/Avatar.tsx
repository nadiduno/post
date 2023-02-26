import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}
export function Avatar({
  src = 'https://github.com/nadiduno.png',
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
