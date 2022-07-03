import igniteLogoSvg from "../../assets/ignite-logo.svg";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={igniteLogoSvg} alt="Logotipo do Ignite" />
        <strong>Ignite Feed</strong>
      </div>
    </header>
  );
};
