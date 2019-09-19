import React from 'react';
import { Row,Col,Tooltip,OverlayTrigger } from "react-bootstrap";

const PickupSavings = (props) => {
    const tooltip = (
        <Tooltip>
            <p>
                Picking up your order in the store helps cut costs, and we pass the savings on to you.
            </p>
        </Tooltip>
    )
    const styles = {
        pickupSavings: {
            textDecoration: 'underline'
        },
        totalSavings:{
            color: 'red',
            fontWeight:800
        }
    }
    return(
        <Row className="show-grid">
            <Col md={6}>
                <OverlayTrigger placement="bottom" overlay={tooltip}>
                    <div style={styles.pickupSavings}>Pickup Savings</div>
                </OverlayTrigger>
            </Col>
            <Col md={6} style
                ={styles.totalSavings}>
                <div>{`$${props.price}`}</div>
            </Col>
        </Row>
    )
};

export default PickupSavings;