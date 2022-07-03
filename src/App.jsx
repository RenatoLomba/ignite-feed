import "./styles/global.css";
import styles from "./styles/app.module.css";

import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { Post } from "./components/post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png",
      name: "Louis Henderson",
      role: "Web Developer @Rocketseat",
    },
    publishedAt: new Date("2022-06-30 17:35:00"),
    content: [
      { id: "content-1", type: "paragraph", content: "Fala galeraa 👋" },
      {
        id: "content-2",
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        id: "content-3",
        type: "paragraph",
        content: [
          { id: "inside-content-1", type: "text", content: "👉" },
          {
            id: "inside-content-2",
            type: "hyperlink",
            content: "jane.design/doctorcare",
          },
        ],
      },
      {
        id: "content-4",
        type: "paragraph",
        content: [
          { id: "inside-content-1", type: "hyperlink", content: "#rocketseat" },
          {
            id: "inside-content-2",
            type: "hyperlink",
            content: "#novoprojeto",
          },
          { id: "inside-content-3", type: "hyperlink", content: "#nlw" },
        ],
      },
    ],
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CEO @Rocketseat",
    },
    publishedAt: new Date("2022-05-10 15:25:00"),
    content: [
      { id: "content-1", type: "paragraph", content: "Fala pessoal 👋" },
      {
        id: "content-2",
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      {
        id: "content-3",
        type: "paragraph",
        content: [
          {
            id: "inside-content-1",
            type: "text",
            content: "Acesse e deixe seu feedback 👉 ",
          },
          {
            id: "inside-content-2",
            type: "hyperlink",
            content: "devonlane.design",
          },
        ],
      },
      {
        id: "content-4",
        type: "paragraph",
        content: [
          { id: "inside-content-1", type: "hyperlink", content: "#uiux" },
          {
            id: "inside-content-2",
            type: "hyperlink",
            content: "#userexperience",
          },
        ],
      },
    ],
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              publishedAt={post.publishedAt}
              content={post.content}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
