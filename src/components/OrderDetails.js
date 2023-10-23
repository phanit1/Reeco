import React from 'react';
import { Container } from 'react-bootstrap';
import "../styles/OrderDetails.css"
import orderdata from '../assets/orderdetails.json'

const OrderDetails = () => {
    const orders = [orderdata];

    return (
        <Container className="order-table">
            <table className="order-table1" >
                <thead>
                    <tr>
                        <td>Supplier</td>
                        <td>Shipping Date</td>
                        <td>Total</td>
                        <td>Category</td>
                        <td>Department</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <th width={"20%"}>{order.supplier}</th>
                            <th>{order.shippingdate}</th>
                            <th>{order.total}</th>
                            <th>&#127790; &#127839; &#127843; &#127847;</th>
                            <th>{order.department}</th>
                            <th  width={"20%"}>{order.status}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
};

export default OrderDetails;
