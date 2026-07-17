import styles from "./TechList.module.css"

export default function TechList({project, type}) {
  return (
    <>
      <h4 className={styles.techListTitle}>{type}</h4>
      <ul className={styles.techList}>
        {project.stack
          .filter((t) => t.type === type)
          .map((tech) => (
            <li key={tech.name}>
              {tech.img !== undefined
              ? <img className={styles.techImg} src={tech.img} alt={tech.name} />
              : tech.type === "resource"
              ? <><span className={styles.subtype}>{tech.subtype}</span> {tech.name}</>
              : tech.name}
            </li>
          ))}
      </ul>
    </>
  );
}
