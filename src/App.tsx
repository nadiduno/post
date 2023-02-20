import { Header } from './components/Header'
import { Post, PostType }  from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'
// Array de objetos [{},{},{}]
const posts: PostType[]=[
  {
    id: 1,
    author:{
      name:'Fulanito de tal',
      role: 'Web Developer | Web Developer',
      // avatarUrl: 'http://github.com/nadiduno.png',
      //Posso não enviar a propiedades avatarURL  porque coloque uma Features de ES6 (Defaut Parameters) como argumento que recebem as propiedades
      //Em caso de não enviar o src coloca um avatar whitout photo por defecto no props.src
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraaa 👋'},
      {type: 'paragraph', content: 'Acabei de subir um projeto no me github. É um projeto implementando React.'},
      {type: 'link', content: 'https://github.com/nadiduno?tab=repositories'},
    ],
    publishedAt: new Date('2023-01-30 20:00:00'),
  },
  {
    id: 2,
    author:{
      name:'Diego Fernandes',
      role: 'Educator @Rocketseat | Web Developer',
      avatarUrl: 'http://github.com/diego3g.png',
    },
    content:[
      {type: 'paragraph', content: 'Fala Dev👋'},
      {type: 'paragraph', content: 'Acabei de gravar um video. Que aprender de React.'},
      {type: 'link', content: 'https://www.youtube.com/watch?v=37SwqREHRGI'},
    ],
    publishedAt: new Date('2023-01-31 14:00:00'),
  },
];
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return(
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>

  )
}
