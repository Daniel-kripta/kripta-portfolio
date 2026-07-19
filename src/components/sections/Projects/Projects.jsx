import styles from "./Projects.module.css";
import TechList from "../../ui/TechList/TechList.jsx";
import IconsLink from "../../ui/IconsLink/IconsLink.jsx";
import { useProjects } from "../../../hooks/useProjects.js";
import { urlImg, techImg } from "../../../utils/imgUtils.js";

export default function Projects({ type }) {
  const { projects, loading, error } = useProjects(type);

  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error: {error}</p>


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
            <div className={styles.projectImg}>
              <img
                src={urlImg(project.screenshot)}
                className={styles.screenshot}
                alt={project.name}
              />
              <div className={styles.projectLinks}>
                <IconsLink project={project}/>
               
              </div>
            </div>
            <p>{project.description}</p>
          </div>
          <div className={styles.stackTech}>

            <TechList project={project} type={"framework"} />
            <TechList project={project} type={"lenguaje"} />
            <TechList project={project} type={"base de datos"} />
            <TechList project={project} type={"recurso"} />
            <TechList project={project} type={"otros"} />
            
          </div>
        </div>
      ))}
    </section>
  );
}
