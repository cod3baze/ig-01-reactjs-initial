import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./styles/global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Elias Alexandre"
            content="Programmer focused on tech around JS language, like Typescript,React,NodeJS"
          />
          <Post
            author="Elias Alexandre"
            content="Programmer focused on tech around JS language, like Typescript,React,NodeJS"
          />
        </main>
      </div>
    </div>
  );
}
