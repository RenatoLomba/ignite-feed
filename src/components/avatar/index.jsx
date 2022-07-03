import classNames from "classnames";
import styles from "./avatar.module.css";

export const Avatar = ({ src, hasBorder = true, className }) => {
  return (
    <img
      className={classNames(
        {
          [styles.avatar]: !hasBorder,
          [styles.avatarWithBorder]: hasBorder,
        },
        className
      )}
      src={src}
    />
  );
};
