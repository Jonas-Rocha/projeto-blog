import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://i.pinimg.com/originals/65/4a/67/654a675e404db7aea824c168d40fa6a7.jpg"
      />

      <div className={styles.profile}>
        <Avatar src="http://moa.omnimulti.com/images/thumb/6/6f/YatoNoragami.jpg/260px-YatoNoragami.jpg" />
        <strong>Jonas Rocha</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
