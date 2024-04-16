import styles from "../styles/Header.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <img src="/logo-light.svg" alt="Home" className={styles.logo} />
      <button className={styles.cta}>Apply for access</button>
    </header>
  );
};
