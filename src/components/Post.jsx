import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src="http://moa.omnimulti.com/images/thumb/6/6f/YatoNoragami.jpg/260px-YatoNoragami.jpg" />
            <div className={styles.authorInfo}>
              <strong>Jonas Rocha</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
            Publicado há 1h
          </time>
        </header>

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            fugit, veniam voluptates molestias nihil velit exercitationem
            molestiae dolorum quam voluptate ipsam, eius quos debitis recusandae
            placeat doloremque ad iste ullam?
          </p>
          <p>
            <a href="">👉 jonas.design/exemple</a>
          </p>
          <p>
            <a href="">#novoprojeto</a>
          </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea placeholder="Deixe um comentário" />
          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    </>
  );
}
