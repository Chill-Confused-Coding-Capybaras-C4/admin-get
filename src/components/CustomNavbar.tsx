import { useIsAuthenticated } from '@azure/msal-react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { TablePage } from '../pages/TablePage';
import { SignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';


export const CustomNavbar = () => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            {isAuthenticated ?
                <div>
                    <Navbar fixed="top" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home">CAPYBARA</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="#table">Table</Nav.Link>
                                <Nav.Link href="#graph">Graph</Nav.Link>
                            </Nav>
                            {/* <Button variant="outline-success">Search</Button> */}
                            {isAuthenticated ? <SignOutButton /> : <SignInButton />}
                        </Container>
                    </Navbar>
                    <section id='table'>
                        <TablePage />
                    </section>




                    <section id='graph'>
                        <TablePage />
                    </section>

                </div> : null}
            {isAuthenticated ? <SignOutButton /> : <SignInButton />}

        </>

    )
}

// {isAuthenticated ? <WelcomeName /> : null}
