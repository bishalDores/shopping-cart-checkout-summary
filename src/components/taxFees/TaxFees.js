import React from 'react';
import { Row,Col } from 'react-bootstrap';

const TaxFees = (props) => {
    return(
        <Row className="show-grid">
            <Col md={6}>Est. taxes and fees (Based on 94085)</Col>
            <Col md={6}>{`$${props.taxes}`}</Col>
        </Row>
    )
};

export default TaxFees;