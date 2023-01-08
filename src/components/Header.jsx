import React from 'react'
import { Container, Dropdown, FormControl, Nav, Navbar, NavbarBrand, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
function Header() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <NavbarBrand>
                    <a>Shoping Cart</a>

                </NavbarBrand>
                <Navbar.Text className='search'>
                    <FormControl style={{ width: 500 }}
                        placeholder='search'
                        className='m-auto'
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color="white" fontSize="23px" />
                            <Badge bg='success'>1</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ minWidth: 370 }}>

                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar >
    )
}

export default Header;