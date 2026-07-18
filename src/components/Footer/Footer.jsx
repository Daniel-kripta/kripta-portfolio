import styles from "./Footer.module.css"
import { LogoKripta } from "../../components/Logos/Logos"
import { IconGitHub, IconLinkedIn } from "../Icons/Icons"

function Footer() {
    return(
    <footer className={styles.footer}>
        <div>© 2026 Daniel Kripta</div>
        <LogoKripta className={styles.logoFooter} />
        <nav className={styles.navFooter}>
            <a href="https://github.com/Daniel-kripta" target="_blank" rel="noreferrer"><IconGitHub /></a>
            <a href="https://www.linkedin.com/in/daniel-kripta" target="_blank" rel="noreferrer"><IconLinkedIn /></a>
        </nav>
    </footer>
    )
}

export default Footer