import React from 'react';
import { Button, Collapse, Card, CardBody, CardImg, CardSubtitle, CardText, Row, Col } from 'react-bootstrap';



class ItemDetails extends React.Component{
    state = {
        open:false
    };

    render(){
        return(
            <div>
                <Button className="item-details-button" bsStyle="link" onClick={()=>this.setState({open: !this.state.open})}>
                    {this.state.open === false ? `See` : `Hide`} item details
                    {this.state.open === false ? `+` : `-`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Card>
                            <Row>
                                <Col md={4}>
                                    <CardImg
                                        top
                                        width= "100%"
                                        alt="thumbnail"
                                        src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                                    />
                                </Col>
                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Subtitle><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, sapiente.</p></Card.Subtitle>
                                        <Row className="show-grid">
                                            <Col md={6}>
                                                <strong>{`$${this.props.price}`}</strong>
                                                <br/>
                                                <strong className="price-strike">
                                                    {`$${this.props.price}`}
                                                </strong>
                                            </Col>
                                            <Col md={6}>Qty:1</Col>
                                        </Row>
                                    </Card.Body>
                                </Col>
                            </Row>



                        </Card>
                    </div>
                </Collapse>
            </div>
        )

    }
};
export default ItemDetails;
