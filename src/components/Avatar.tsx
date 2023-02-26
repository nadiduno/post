import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

// Desestructurando os argumento em lugar de receber Avatar(props){} tenho que
// Uso src para almacenar props.src
// hasBorder para almacenar props.hasBorder
// por isso Avatar({src,hasBorder}){}
// Agora bem, em caso de não recever as propiedades e para que o programa não de erro
// Coloquei uma Features de ES6 chamada "Defaut Parameters" no argumento
// A qual consiste em asignar um valor por default ao argumento em caso de não recever nada
// Em caso de não recever a props.src colocaremos por default um "avatar predefinido" que esta na rota src/assets/avatarcomicsneon.jpg
// Em caso de não recever a props.hasBorder colocaremos por default "true"
// Por isso Avatar({src="src/assets/avatarcomicsneon.jpg", hasBorder=true}){}

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}
export function Avatar({
  src = 'src/assets/avatarcomicsneon.jpg',
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
