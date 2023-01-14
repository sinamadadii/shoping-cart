import React from 'react'
import { Container, Dropdown, FormControl, Nav, Navbar, NavbarBrand, Badge, Button } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import './styles.css';

const Header = () => {

    const { state: { cart }, dispatch } = CartState();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav>
                    <Dropdown align="right" >
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color="white" fontSize="23px" />
                            <Badge bg='success'>{cart.length}</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ minWidth: 370 }} menuAlign="right">

                            {cart.length > 0 ? (
                                <>
                                    {cart.map((product) => (
                                        <span className="cartitem" key={product.id}>
                                            <img
                                                src={product.image}
                                                className="cartItemImg"
                                                alt={product.name}
                                            />
                                            <div className="cartItemDetail">
                                                <span>{product.name}</span>
                                                <span>$ {product.price.split(".")[0]}</span>
                                            </div>
                                            <AiFillDelete
                                                fontSize="20px"
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>
                                                    dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: product,
                                                    })
                                                }
                                            />
                                        </span>
                                    ))}
                                    <Link to="/cart">
                                        <Button style={{ width: "95%", margin: "0 10px" }}>
                                            Go To Cart
                                        </Button>
                                    </Link>
                                </>
                            ) : (
                                <span style={{ padding: 10 }}>Cart is Empty!</span>
                            )}

                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
                <Navbar.Text className='search'>
                    <FormControl style={{ width: 500 }}
                        placeholder='search'
                        className='m-auto'
                    />
                </Navbar.Text>
                <NavbarBrand>
                    <Link >Shoping Cart</Link>

                </NavbarBrand>
            </Container>
        </Navbar >
    )
}

export default Header;