import React, { Component } from 'react';

import { Button,
        Collapse,
        Card,
        Form,
        Row,
        Col,
        FormGroup,
        FormLabel,
        FormControl
        }
    from 'react-bootstrap';

import { connect } from 'react-redux';
import { handleChange } from "../../actions/promoCodeActions";

class PromoCode extends Component{
    state = {
        open:false,
    };

    handleChange = e => {
        this.props.handleChange(e)
    }
    render(){
        return(
            <div>
                <Button className="promo-code-button" bsStyle="link" onClick={()=>this.setState({open: !this.state.open})}>
                    {this.state.open === false ? `Apply `:`Hide `}
                    promo code
                    {this.state.open === false ? `+`:`-`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Card>
                            <Card.Body>
                                <Row className="show-grid">
                                    <Col md={12}>
                                        <Form>
                                            <FormGroup controlId="formInLineName">
                                                <FormLabel>Promo Code</FormLabel>
                                                <FormControl
                                                    type="text"
                                                    placeholder="Enter Promo Code"
                                                    value={this.props.promoCode}
                                                    onChange={this.handleChange}
                                                />
                                            </FormGroup>
                                            <Button
                                                block
                                                variant="success"
                                                disabled={this.props.isDisabled}
                                                onClick={this.props.giveDiscount}
                                            >
                                                Apply
                                            </Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>

                        </Card>
                    </div>
                </Collapse>
            </div>
        )
    }
};

const mapStateToProps = state => ({
        promoCode: state.promoCode.value
})




;



export default connect(mapStateToProps,{handleChange})(PromoCode);