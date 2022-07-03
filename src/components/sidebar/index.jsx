import { PencilSimpleLine } from "phosphor-react";

import styles from "./sidebar.module.css";
import { Button } from "../button";
import { UserInfo } from "../user-info";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <UserInfo
        imgSrc="https://github.com/RenatoLomba.png"
        name="Renato Lomba"
        role="Web Developer"
        className={styles.profile}
      />

      <footer>
        <Button as="a" href="#">
          <PencilSimpleLine size={20} /> Editar seu perfil
        </Button>
      </footer>
    </aside>
  );
};
