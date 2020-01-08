import React from 'react'

const OrderSummary = () => {
  return (
    <div className="cart-order__summary rounded">
      <div className="m-t-1- m-b-10">
        <h2>Order summary</h2>
      </div>
      <dl className="dev-dl">
        <dt>Sub Total</dt>
        <dd>$92.44</dd>
      </dl>
      <dl className="dev-dl">
        <dt>Sub Total</dt>
        <dd>$92.44</dd>
      </dl>
      <div className="dev-divider m-b-10 m-t-10"></div>
      <div className="dev-bold m-t-20 m-b-20">
        <dl className="dev-dl">
          <dt>Total</dt>
          <dd className="dev-bold__caption">$192.44</dd>
        </dl>
      </div>
      <div>
        <button 
          className="ui green fluid button m-t-30"
        >
        Check out
        </button>
      </div>
    </div>
  )
}

export default OrderSummary
