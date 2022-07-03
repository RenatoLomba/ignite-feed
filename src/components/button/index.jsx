import classNames from "classnames";
import styles from "./button.module.css";

export const Button = ({
  as = "button",
  variant = "outlined",
  children,
  ...props
}) => {
  if (as === "a") {
    return (
      <a
        className={classNames(styles.button, {
          [styles.outlined]: variant === "outlined",
          [styles.contained]: variant === "contained",
        })}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classNames(styles.button, {
        [styles.outlined]: variant === "outlined",
        [styles.contained]: variant === "contained",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
