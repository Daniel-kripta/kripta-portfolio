import styles from "./About.module.css"

export default function About(){
    return(
        <section id="about" className={styles.about}>
            <article>
                <h3>Sobre mí</h3> 
                <p>Desarrollador Junior en continua formación, especializándome en tecnologías web para poder cubrir web, apps y software con una misma base. Antes pasé por el trabajo social y las actividades administrativas, gestionando proyectos en asociaciones — esa experiencia es la que me permite entender de primera mano cómo funcionan este tipo de organizaciones y sus necesidades reales.</p>           
            </article>

            <article>
                <h3>Sobre mi trabajo</h3> 
                <p>Programo páginas web, aplicaciones para móvil y programas de gestión, con foco en las necesidades reales de las entidades del tercer sector. Además, desarrollo web/apps orientadas a dar respuesta a necesidades sociales.</p>           
            </article>

        </section>
    )
}