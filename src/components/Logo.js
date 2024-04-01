import React from 'react';
import { Container } from 'react-bootstrap';
import Main_logo from '../images/Logo.png';
import '../css/Logo.css';

const center = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

};


const Logo = () => {
    return (
        <Container class="row justify-content-center" style={center}>
            <div class="center"  >
                <img src={Main_logo} alt="Main_logo" />
            </div>

            <p>Test</p>
        </Container>
    );
};

export default Logo;