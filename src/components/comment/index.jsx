import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "../avatar";

import styles from "./comment.module.css";

export const Comment = ({
  content,
  onDeleteButtonClick,
  likeCount,
  onLikeCommentButtonClick,
}) => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>
                Diego Fernandes <small>(você)</small>
              </strong>

              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 2h atrás
              </time>
            </div>

            <button onClick={onDeleteButtonClick} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={onLikeCommentButtonClick} title="Like no post">
            <ThumbsUp size={20} />

            <strong>
              Aplaudir
              {!!likeCount && ` • ${likeCount.toString().padStart(2, "0")}`}
            </strong>
          </button>
        </footer>
      </div>
    </div>
  );
};
