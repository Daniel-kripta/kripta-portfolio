import styles from "./TechList.module.css"

export default function TechList({project, type}) {
  
  const filtered = project.stack.filter((t) => t.type === type)
  if (filtered.length === 0) return null

  return (
    <>
      <h4 className={styles.techListTitle}>{type}</h4>
      <ul className={styles.techList}>
        {project.stack
          .filter((t) => t.type === type)
          .map((tech) => (
            <li key={tech.name}>
              {tech.img !== undefined
              ? <>{tech.subtype && <span className={styles.subtype}>{tech.subtype}</span>}<img className={styles.techImg} src={tech.img} alt={tech.name} title={tech.name} /></>
              : tech.type === "recurso" || tech.type === "otros"
              ? <><span className={styles.subtype}>{tech.subtype}</span> {tech.name}</>
              : tech.name}
            </li>
          ))}
      </ul>
    </>
  );
}
