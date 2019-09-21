import React from 'react';
import Subtotal from "./components/subtotal/Subtotal";
import PickupSavings from "./components/pickupSavings/PickupSavings";
import TaxFees from "./components/taxFees/TaxFees";
import EstimatedTotal from "./components/estimatedTotal/EstimatedTotal";
import ItemDetails from "./components/itemDetails/ItemDetails";
import PromoCode from "./components/promoCode/PromoCode";
import { connect } from 'react-redux';
import {handleChange} from "./actions/promoCodeActions";

import './App.css';

class App extends React.Component{
  state = {
    total: 100,
    pickupSavings: -3.85,
    taxes:0,
    estimatedTotal:0,
    disabledPromoBtn:false
  }
    componentDidMount(){
        this.setState(
            { taxes: (this.state.total + this.state.pickupSavings) * 0.0875 },
            function() {
                this.setState({
                    estimatedTotal:
                        this.state.total + this.state.pickupSavings + this.state.taxes
                });
            }
        );
    };

    giveDiscountHandler = () => {
        if(this.props.promoCode === 'DISCOUNT'){
            this.setState({
                estimatedTotal: this.state.estimatedTotal * 0.9,
                disabledPromoBtn: true
            })
        }
    };

  render() {
    return(
        <div className="container card-container">
          <div className="purchase-card">
              <Subtotal price={this.state.total.toFixed(2)}/>
              <PickupSavings price={this.state.pickupSavings}/>
              <TaxFees taxes={this.state.taxes.toFixed(2)}/>
              <hr/>
              <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
              <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
              <hr/>
              <PromoCode
                  giveDiscount={() => this.giveDiscountHandler()}
                  isDisabled={this.state.disabledPromoBtn}
              />
          </div>
        </div>
    )
  }
}
const mapStateToProps = state => ({
    promoCode: state.promoCode.value
});

export default connect(mapStateToProps,{handleChange})(App);
