import styles from "../styles/Features.module.css";

export const Features = () => {
  return (
    <section className={styles.container}>
      <div className={styles.features}>
        <div className={styles.feature}>
          <h2 className={styles.number}>1</h2>
          <h2 className={styles.title}>Actionable insights</h2>
          <p className={styles.description}>
            Optimize your products, improve customer satisfaction and stay ahead
            of the competition with our product data analytics.
          </p>
        </div>
        <div className={styles.feature}>
          <h2 className={styles.number}>2</h2>
          <h2 className={styles.title}>Data-driven decisions</h2>
          <p className={styles.description}>
            Make data-driven decisions with our product data analytics. Our
            AI-generated reports help you unlock insights hidden in your product
            data.
          </p>
        </div>
        <div className={styles.feature}>
          <h2 className={styles.number}>3</h2>
          <h2 className={styles.title}>Always affordable</h2>
          <p className={styles.description}>
            Always affordable pricing that scales with your business. Get
            top-quality product data analytics services without hidden costs or
            unexpected fees.
          </p>
        </div>
      </div>
    </section>
  );
};
