import React, { useContext, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap';

import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { TfiGithub } from 'react-icons/tfi'

const Header = () => {
    const context = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <Navbar style={{ backgroundColor: "#ac33ff" }}
            className='d-flex justify-content-end'>
            <NavbarBrand>
                <TfiGithub size={"40px"} />
                <Link to="/" className="mx-auto text-dark btn " >
                    Git-Finder
                </Link>
            </NavbarBrand>
            <NavbarText className='text-dark c-5'>{context.user?.email ? context.user.email : ""}
            </NavbarText>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav >
                    {context.user ? (
                        <NavItem>
                            <NavLink onClick={() => { context.setUser(null) }} className="text-dark ">
                                <button className='btn btn-danger'>Logout</button>
                            </NavLink>
                        </NavItem>
                    ) : (
                        <>
                            <NavItem>
                                <NavLink tag={Link}
                                    to="/Signup"
                                    className="btn mx-4 btn-success text-white "
                                >
                                    Signup
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/Signin" className="btn btn-success text-white">
                                    Signin
                                </NavLink>
                            </NavItem>
                        </>
                    )}
                </Nav>
            </Collapse>
        </Navbar >
    );
};


export default Header;