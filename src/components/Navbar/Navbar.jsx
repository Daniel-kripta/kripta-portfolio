import {LogoNavBar} from "../Logos/Logos"
import Menu from "../Menu/Menu"
import styles from "./Navbar.module.css"

function Navbar() {
    return(
    <>
    <div className={styles.bgNavbar}>
        <LogoNavBar className={styles.logoNavbar}/>
        <Menu/>
    </div>
    </>
    )
}

export default Navbar