import styles from './Nav.module.css'

function Nav() {

    return (

        <nav className={`${[styles.nav]} navbar navbar-expand-lg`}>
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className={`${[styles.link]} nav-link text-gray-hover shadow-none`} aria-current="page" href="#">Início</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${[styles.link]} nav-link text-gray-hover ps-3 shadow-none`} aria-current="page" href="#">Sobre mim</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${[styles.link]} nav-link text-gray-hover ps-3 shadow-none`} href="#">Habilidades</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${[styles.link]} nav-link text-gray-hover ps-3 shadow-none`} href="#">Experiência</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${[styles.link]} nav-link text-gray-hover ps-3 shadow-none`} href="#">Projetos</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${[styles.link]} nav-link text-gray-hover ps-3 shadow-none`} href="#">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;