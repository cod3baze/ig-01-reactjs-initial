import { PencilLine } from "phosphor-react";

import styles from "./styles.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt="user model image"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/eliasallex.png"
          alt="Elias Alexandre github profile picture"
        />

        <strong>Elias Alexandre</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine />
          editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
