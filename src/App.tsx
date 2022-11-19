import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import "./global.css"

import styles from "./App.module.css"

const posts = [

  {
    id: 1,
    author: {
      avatarUrl:"https://github.com/HevertonL.png",
      name: "Heverton Luiz",
      role: "Web Developer"
    },
    publishedAt: new Date("2022-11-07 23:18:00"),
    content: [
      {type: "paragraph", content: "Fala galeraa 👋" },
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "👉 jane.design/doctorcare"}
    ]
  }
  ,
  {
    id: 2,
    author: {
      avatarUrl:"https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat"
    },
    publishedAt: new Date("2022-11-07 23:18:00"),
    content: [
      {type: "paragraph", content: "Fala galeraa 👋" },
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "👉 jane.design/doctorcare"}
    ]
  }
]
export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>

        <Sidebar/>
        
        <main>
          {posts.map(post => {
            return (
              <Post
              key={post.id}
              author= {post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
            
          })}
        </main>
      
      </div>
      

    </div>
  )

}
