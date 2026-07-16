import styles from "./Projects.module.css";
import data from "../../../data/projects.js";

export default function Projects({ type }) {
  const projects = data[type];
  function techList(items) {
    return items.map((tech) =>
      tech.img !== undefined ? (
        <li key={tech.name}>
          <img className={styles.techImg} src={tech.img} alt={tech.name} />
        </li>
      ) : (
        <li key={tech.name}>{tech.name}</li>
      ),
    );
  }

  return (
    <section id="proyectos" className={styles.projectSection}>
      {projects.map((project) => (
        <div key={project.id} className={styles.projectCard}>
          <div>
            <h3>{project.name}</h3>
            <img
              src={project.screenshot}
              className={styles.screenshot}
              alt={project.name}
            />
            <p>{project.description}</p>
          </div>
          <div className={styles.stackTech}>
            <h4>Frameworks</h4>
            <ul>
              {techList(project.stack.filter((t) => t.type === "framework"))}
            </ul>

            <h4>Lenguajes</h4>
            <ul>
              {techList(project.stack.filter((t) => t.type === "language"))}
            </ul>

            <h4>Recursos</h4>
            <ul>
              {techList(project.stack.filter((t) => t.type === "resource"))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
