import React from 'react'

const OrderSummary = () => {
  return (
    <div className="cart-order__summary rounded">
      <h2>Order summary</h2>
      <div>
        <h5>Sub total: <span>$92.44</span> </h5>
      </div>
      <div>
        <h5>Shipping: <span>$0.00</span></h5>
      </div>
      <div className="m-t-20 m-b-20">
        <h2>Total : $92.44</h2>
      </div>
      <div>
        <button 
          className="ui green button"
        >Check out</button>
      </div>
    </div>
  )
}

export default OrderSummary
