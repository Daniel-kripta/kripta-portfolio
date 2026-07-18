import About from "../../components/sections/About/About"
import Hero from "../../components/sections/Hero/Hero"
import Projects from "../../components/sections/Projects/Projects"
import styles from "./Home.module.css"

function Home() {
    return(
        <main className={styles.heroMain}>
            <Hero/>
            <About/>
            <h2>Mis proyectos</h2>
            <Projects type="myProjects"/>
        </main>
    )
}

export default Home