import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'
import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      name: ' Nadi Duno',
      role: 'DevRel | Web Developer',
      avatarUrl: 'http://github.com/nadiduno.png',
    },
    content: [
      { type: 'paragraph', content: 'Olá Olaaá amigos 💜' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir um projeto no me github. É um projeto implementando React.',
      },
      { type: 'link', content: 'https://github.com/nadiduno/post' },
    ],
    publishedAt: new Date('2023-02-26 13:34:00'),
  },
  {
    id: 2,
    author: {
      name: 'Fulanito de tal',
      role: 'Web Developer Front-end',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraaa 👋' },
      {
        type: 'paragraph',
        content:
          'Você sabia 🙀 que Nadi, tem um Diario de estudo da Nadi para ajudar a comunidade, aqui o link.',
      },
      { type: 'link', content: 'https://devrelnadiduno.blogspot.com/' },
    ],
    publishedAt: new Date('2023-01-31 14:00:00'),
  },
  {
    id: 3,
    author: {
      name: 'Diego Fernandes',
      role: 'Educator @Rocketseat | Web Developer',
      avatarUrl: 'http://github.com/diego3g.png',
    },
    content: [
      { type: 'paragraph', content: 'Fala Dev👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de gravar um video. Tudo que você deve estudar de JavaScript antes do React.',
      },
      { type: 'link', content: 'https://www.youtube.com/watch?v=37SwqREHRGI' },
    ],
    publishedAt: new Date('2023-01-26 14:00:00'),
  },
]
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
        </main>
      </div>
    </div>
  )
}
