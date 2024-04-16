import styles from "../styles/Hero.module.css";
import { Header } from "./Header";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Data <span>tailored</span> to your needs.
        </h1>
        <button className={styles.cta}>Learn more</button>
      </div>
      <img
        src="/image-hero.webp"
        alt="Main illustration"
        className={styles.image}
      />
    </section>
  );
};
