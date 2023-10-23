import { React, useState } from 'react';
import "../styles/ProductDetails.css"
import { Container, Button, Modal } from 'react-bootstrap';
import fruit from '../assets/fruitimage.jpg';
import print from '../assets/printimage.png';
import productsdata from '../assets/products.json'

const ProductDetails = () => {
    
    const [products, setProducts] = useState(productsdata.products);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [currentProduct, setCurrentProduct] = useState({});

    const handleProductStatus = (itemId) => {
        const updatedItems = products.map(item => {
            if (item.id === itemId) {
                return { ...item, status: "Approved", buttonColor: "#32CD32" };
            }
            return item;
        });
        setProducts(updatedItems);
        handleClose();
    }
    const handleProductMissingStatus = (itemId, isUrgent) => {
        const updatedItems1 = products.map(item => {
            if (item.id === itemId) {
                if (isUrgent === "Yes") {
                    return { ...item, status: "Missing - Urgent", buttonColor: "red" };
                }
                else {
                    return { ...item, status: "Missing", buttonColor: "coral" };
                }
            }
            return item;
        });
        setProducts(updatedItems1);
        handleClose();
    }

    return (
        <Container className="product-container">
            <div className='row'>
                <div className='col sm-6'>
                    <div className='searchbar'>
                        <input style={{ border: "none" }} className="search" type="search" placeholder="Search..." />
                        <i class="fa fa-search" style={{color:'lightgrey'}}></i>
                    </div>
                </div>
                <div className='col sm-6'>
                    <div className='d-flex justify-content-end buttonStyle'>
                        <Button variant="light">Add Item</Button>
                        <img width="30" height="30" src={print} alt="print"></img>
                    </div>
                </div>
            </div>
            <Modal size="lg" show={show} onHide={handleClose} backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title>Missing product</Modal.Title>
                </Modal.Header>
                <Modal.Body>Is {currentProduct.productname} urgent?</Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => handleProductMissingStatus(currentProduct.id, "No")}>No</Button>
                    <Button onClick={() => handleProductMissingStatus(currentProduct.id, "Yes")}>Yes</Button>
                </Modal.Footer>
            </Modal>
            <table className="product-table">
                <thead>
                    <tr style={{ border: "3px solid whitesmoke"}}>
                        <td></td>
                        <td>Product name</td>
                        <td>Brand</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total</td>
                        <td>Status</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td><img src={fruit} width={"40px"} height={"40px"} alt='fruit'></img></td>
                            <td width="25%">{product.productname}</td>
                            <td width="10%">{product.brand}</td>
                            <td width="10%">{product.price}</td>
                            <td>{product.quantity}</td>
                            <td width="10%">{product.total}</td>
                            <td width="20%"><button className='statusStyle' style={{ visibility: product.status === "" ? "hidden":"visible",backgroundColor: product.buttonColor}}>{product.status}</button></td>
                            <td width="5%" style={{fontSize:"x-large", color: product.status === "Approved" && (product.status !== "Missing" && product.status !== "Missing - Urgent") ? "#32CD32" : "black"}} onClick={() => { handleProductStatus(product.id) }}>&#10003; </td>
                            <td width="5%" style={{fontSize:"x-large", color: product.status === "Missing" || product.status === "Missing - Urgent" ? product.buttonColor : "black"}} onClick={() => {setCurrentProduct(product);handleShow()}}>x</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
};

export default ProductDetails;
