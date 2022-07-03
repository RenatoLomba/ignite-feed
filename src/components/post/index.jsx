import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Button } from "../button";
import { Comment } from "../comment";
import { UserInfo } from "../user-info";
import { getHtmlByContentType } from "../../utils/get-html-by-content-type";

import styles from "./post.module.css";
import { useState } from "react";

export const Post = ({ author, content, publishedAt }) => {
  const [comments, setComments] = useState([
    {
      id: 1,
      content: "Post muito bacana, hein? ❤️",
      likeCount: 0,
    },
  ]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedAtTimeTitle = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );
  const publishedAtDateTime = format(publishedAt, "yyyy-LL-dd HH:mm:SS");
  const publishedAtDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const isNewCommentEmpty = !!newCommentText.trim();

  const clearNewCommentText = () => {
    setNewCommentText("");
  };

  const createNewComment = () => {
    setComments((prev) => [
      { id: prev.length + 1, content: newCommentText, likeCount: 0 },
      ...prev,
    ]);
  };

  //#region HANDLERS
  const handleNewCommentTextChange = (e) => {
    e.target.setCustomValidity("");
    setNewCommentText(e.target.value);
  };

  const handlePublishCommentFormSubmit = (e) => {
    e.preventDefault();

    if (!isNewCommentEmpty) return;

    createNewComment();
    clearNewCommentText();
  };

  const handleDeleteComment = (commentId) => {
    setComments((prev) =>
      [...prev].filter((comment) => comment.id !== commentId)
    );
  };

  const handleLikeComment = (commentId) => {
    setComments((prev) =>
      [...prev].map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, likeCount: comment.likeCount + 1 };
        }

        return comment;
      })
    );
  };

  const handleInvalidNewComment = (e) => {
    e.target.setCustomValidity("Esse campo é obrigatório");
  };
  //#endregion

  return (
    <article className={styles.post}>
      <header>
        <UserInfo
          imgSrc={author.avatarUrl}
          direction="row"
          name={author.name}
          role={author.role}
        />

        <time title={publishedAtTimeTitle} dateTime={publishedAtDateTime}>
          Publicado {publishedAtDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((each) => getHtmlByContentType(each))}
      </div>

      <form
        onSubmit={handlePublishCommentFormSubmit}
        className={styles.feedbackForm}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          value={newCommentText}
          onChange={handleNewCommentTextChange}
          placeholder="Deixe um comentário"
          onInvalid={handleInvalidNewComment}
          required
        />

        <footer>
          <Button
            disabled={!isNewCommentEmpty}
            variant="contained"
            type="submit"
          >
            Publicar
          </Button>
        </footer>
      </form>

      <div className={styles.commentsList}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            likeCount={comment.likeCount}
            content={comment.content}
            onDeleteButtonClick={() => handleDeleteComment(comment.id)}
            onLikeCommentButtonClick={() => handleLikeComment(comment.id)}
          />
        ))}
      </div>
    </article>
  );
};
