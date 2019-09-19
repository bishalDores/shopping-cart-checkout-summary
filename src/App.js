import React from 'react';
import Subtotal from "./components/subtotal/Subtotal";
import PickupSavings from "./components/pickupSavings/PickupSavings";
import TaxFees from "./components/taxFees/TaxFees";
import EstimatedTotal from "./components/estimatedTotal/EstimatedTotal";

import './App.css';

class App extends React.Component{
  state = {
    total: 100,
    pickupSavings: -3.85,
    taxes:0,
    estimatedTotal:0
  }
  render() {
    return(
        <div className="container card-container">
          <div className="purchase-card">
              <Subtotal price={this.state.total.toFixed(2)}/>
              <PickupSavings price={this.state.pickupSavings}/>
              <TaxFees taxes={this.state.taxes.toFixed(2)}/>
              <hr/>
              <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
          </div>
        </div>
    )
  }
}
export default App;
