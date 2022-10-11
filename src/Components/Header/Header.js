import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand href="#home">KaQuizCrackers</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto gap-3">
                        <Link className='link' to="/">Topics</Link>
                        <Link className='link' to="statistics">Statistics</Link>
                        <Link className='link' to="blog">Blog</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;