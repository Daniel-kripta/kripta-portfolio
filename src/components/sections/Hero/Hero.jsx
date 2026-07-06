import styles from "./Hero.module.css";
import heroBg from "../../../assets/images/heroBackground.png";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>

      <div className={styles.heroBg}>
        <img src={heroBg} alt="" />
      </div>

      <div className={styles.heroTitle}>
        <h2>Daniel Kripta</h2>
        <h1>Desarrollo Web, App y Software</h1>
      </div>

      <div className={styles.idHero}>
        <span>Daniel García Zamora</span>
        <br />
        <span>Las Palmas de G.C.</span>
      </div>

    </section>
  );
}
