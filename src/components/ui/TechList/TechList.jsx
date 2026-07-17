import styles from "./TechList.module.css"

export default function TechList({project, type}) {
  return(
  <>
  <h4>{type}</h4>
  <ul className={styles.techList}>
    {project.stack
      .filter((t) => t.type === type)
      .map((tech) => (
        <li key={tech.name}>
          <img
            className={styles.techImg}
            src={tech.img}
            alt={tech.name}
          />
        </li>
      ))}
  </ul>
  </>
  )
}
