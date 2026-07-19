import { IconDemoPage, IconGitHub } from "../../Icons/Icons";
import styles from "./IconsLink.module.css"

export default function IconsLink({project}) {
  return (
    <>
      {project.urls.find((u) => u.name === "GitHub") &&
        <a title={project.urls.find((u) => u.name === "GitHub").description} href={project.urls.find((u) => u.name === "GitHub").url}>
          <IconGitHub className={styles.iconLinks} />
        </a>
      }

      {project.urls.find((u) => u.name === "Demo") &&
        <a title={project.urls.find((u) => u.name === "Demo").description} href={project.urls.find((u) => u.name === "Demo").url}>
          <IconDemoPage className={styles.iconLinks} />
        </a>
      }
    </>
  );
}
