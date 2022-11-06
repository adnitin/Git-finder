import React from 'react';
import { Container } from 'reactstrap';


const Footer = () => {
    return (
        <Container fluid
            tag="footer"
            className='text-center text-white text-uppercase fixed-bottom p-4'
            style={{ backgroundColor: "#ac33ff" }}
        >
            My App github sarch page with fireBase
        </Container>
    );
};

export default Footer;