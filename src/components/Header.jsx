import React from 'react'
import { Container, Dropdown, FormControl, Nav, Navbar, NavbarBrand, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavbarBrand>
                    <Link >Shoping Cart</Link>

                </NavbarBrand>
                <Navbar.Text className='search'>
                    <FormControl style={{ width: 500 }}
                        placeholder='search'
                        className='m-auto'
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown >
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color="white" fontSize="23px" />
                            <Badge bg='success'>1</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            <span style={{ padding: 10 }}>Cart is empty</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;