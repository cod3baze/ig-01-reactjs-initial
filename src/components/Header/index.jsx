import styles from "./styles.module.css";

import igniteLogo from "../../assets/Ignite-simbol.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo do ignite" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
