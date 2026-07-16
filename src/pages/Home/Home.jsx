import About from "../../components/sections/About/About"
import Hero from "../../components/sections/Hero/Hero"
import Projects from "../../components/sections/Projects/Projects"

function Home() {
    return(
        <>
            <Hero/>
            <About/>
            <Projects type="myProjects"/>
        </>
    )
}

export default Home