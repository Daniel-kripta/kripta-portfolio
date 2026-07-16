import styles from "./Projects.module.css"
import data from "../../../data/projects.js"


export default function Projects({type}){

    const projects = data[type]

    return(
        <section id="proyectos" className={styles.projectSection}>
            {projects.map((project) => (
                <div key={project.id} className={styles.projectCard}>
                    <div>
                        <h3>{project.name}</h3>
                        <img src={project.screenshot} className={styles.screenshot} alt={project.name} />
                        <p>{project.description}</p>
                    </div>
                    <div>     
                        <span>Stack tecnológico</span>               
                        <ul>
                            {project.stack.map((tech, i) => (
                                <li key={tech}><img className={styles.techImg} src={project.stackImg[i]} alt={tech} />  </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </section>
    )
}