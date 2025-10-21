'use client';

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import { useAuth } from "@/context/AuthContext";
import { useAuthCheck } from "@/customHooks/useAuthCheck";
import { useSearchContext } from "@/context/SearchContext";

function NavbarBootstrap() {
    const pathname = usePathname();
    const router = useRouter();

    const { isLoading, isLogged } = useAuthCheck();
    const { setIsLogged, isLogged: isLoggedContext } = useAuth();
    const { setResults, setSearchTerm: setSearchTermProvider } = useSearchContext();

    const [searchTerm, setSearchTerm] = useState('');
    const [isLoadingTerm, setIsLoadingTerm] = useState(true);
    const [buttonMessage, setButtonMessage] = useState('Buscar');

    useEffect(() => {
        setIsLogged(isLogged);
    }, [isLogged, setIsLogged]);

    useEffect(() => {
        if(isLoading) {
            return;
        }

        if (isLoggedContext && (pathname === '/login/login' || pathname === '/login/register')) {
            router.push('/');
        }

        const isPublicPage = pathname === '/login/login' || pathname === '/login/register' || pathname === '/about';
        if (!isLoggedContext && !isPublicPage) {
            router.push('/login/login');}
    }, [router, isLoading, pathname, isLoggedContext]);


    async function handleSubmitt(e) {
        e.preventDefault();
        setIsLoadingTerm(false);
        setButtonMessage('Buscando...');

        try {
            const request = await fetch(
                `${process.env.SEARCH}${searchTerm}`,
                {
                    method: 'GET',
                    credentials: 'include',
                }
            );

            const data = await request.json();
            setResults(data);
            setSearchTermProvider(searchTerm);

        } catch (error) {
        } finally {
            setIsLoadingTerm(true);
            setButtonMessage('Buscar');
            router.push('/search');
        }
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary mb-4">
            <Container>
                <Navbar.Brand as={Link} href="/">Max Dias</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form onSubmit={handleSubmitt} className="d-flex ms-3">
                        <FormControl
                            type="search"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Buscar"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button disabled={!isLoadingTerm} type="submit" variant="outline-success">
                            {buttonMessage}
                        </Button>
                    </Form>

                    <Nav className="ms-auto align-items-center">
                        {!isLoggedContext && !isLoading && (
                            <>
                                <Nav.Link as={Link} href="/login/login">Entrar</Nav.Link>
                                <Nav.Link as={Link} href="/login/register">Registrar</Nav.Link>
                            </>
                        )}

                        {isLoggedContext && !isLoading && (
                            <NavDropdown title="Perfil" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} href="/profile">Meu Perfil</NavDropdown.Item>
                                <NavDropdown.Item as={Link} href="/friends">Amigos</NavDropdown.Item>
                                <NavDropdown.Item as={Link} href="/posts">Posts</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} href="#action/3.4">Sair</NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarBootstrap;
