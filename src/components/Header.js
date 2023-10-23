import React from 'react';
import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import '../styles/Header.css';

const Header = () => {
    return (
        <>
            <Navbar className="bg-success">
                <Container>
                    <Navbar.Brand style={{ color: "white" }}>Reeco</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: "white" }}>Store</Nav.Link>
                        <Nav.Link style={{ color: "white" }}>Orders</Nav.Link>
                        <Nav.Link style={{ color: "white" }}>Analytics</Nav.Link>
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text style={{ color: "white" }}><img color="white" width="30" height="30" src="https://img.icons8.com/ios/50/000000/shopping-cart--v1.png" alt="shopping-cart--v1"/></Navbar.Text>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Navbar.Text style={{ color: "white" }}>
                            Hello, James
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <br></br>
                <p>Orders &gt; Order 32457ABC</p>
                <br></br>
                <div className='row'>
                    <div className='col sm-6'>
                        <div className='d-flex justify-content-start'>
                            <h2>Order 32457ABC</h2>
                        </div>
                    </div>
                    <div className='col sm-6'>
                        <div className='d-flex justify-content-end buttonStyle1'>
                            <Button variant="light">Back</Button>
                            <Button variant="success" className='buttonStyle2'>Approve Order</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Header;
