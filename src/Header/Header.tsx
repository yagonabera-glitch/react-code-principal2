import './Header.css';
import logo from '.././assets/img/Logo.png'
import { Nav, Navbar } from 'react-bootstrap';

export default function Header() {
    return (
        <header>
            <Navbar expand="lg" className="container_geral container_header">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto container_cabecalho">

                        <Nav.Link>

                            <div className="pagina_produtos">
                                <img src={logo} alt="" />
                            </div>
                        </Nav.Link>

<Nav className="colecao">

                        <Nav.Link className="colecao2">
                            <p>Coleção</p>
                        </Nav.Link>
                        <Nav.Link className="colecao2">
                            <p>Cadastro</p>
                        </Nav.Link>
                        <Nav.Link className="colecao2">
                            <svg xmlns={logo} viewBox="0 0 640 640">
                                <path fill="currentColor"
                                    d="M448 272C448 174.8 369.2 96 272 96C174.8 96 96 174.8 96 272C96 369.2 174.8 448 272 448C369.2 448 448 369.2 448 272zM407.3 430C371 461.2 323.7 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272C480 323.7 461.2 371 430 407.3L571.3 548.7C577.5 554.9 577.5 565.1 571.3 571.3C565.1 577.5 554.9 577.5 548.7 571.3L407.3 430z" />
                            </svg>

                        </Nav.Link>
                                    </Nav>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </header>

    )
}