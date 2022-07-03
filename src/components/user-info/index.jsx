import classNames from "classnames";
import { Avatar } from "../avatar";
import styles from "./user-info.module.css";

export const UserInfo = ({
  direction = "column",
  imgSrc,
  name,
  role,
  className,
  ...props
}) => {
  return (
    <div
      className={classNames(
        styles.profile,
        {
          [styles.column]: direction === "column",
          [styles.row]: direction === "row",
        },
        className
      )}
      {...props}
    >
      <Avatar src={imgSrc} />

      <div className={styles.info}>
        <strong>{name}</strong>
        <span>{role}</span>
      </div>
    </div>
  );
};
