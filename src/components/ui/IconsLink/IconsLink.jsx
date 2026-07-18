import { IconDemoPage, IconGitHub } from "../../Icons/Icons";
import styles from "./IconsLink.module.css"

export default function IconsLink({project}) {
  return (
    <>
      {project.url.find((u) => u.name === "GitHub") && 
        <a title={project.url.find((u) => u.name === "GitHub").description} href={project.url.find((u) => u.name === "GitHub").url}>
          <IconGitHub className={styles.iconLinks} />
        </a>
      }

      {project.url.find((u) => u.name === "Demo") && 
        <a title={project.url.find((u) => u.name === "Demo").description} href={project.url.find((u) => u.name === "Demo").url}>
          <IconDemoPage className={styles.iconLinks} />
        </a>
      }
    </>
  );
}
