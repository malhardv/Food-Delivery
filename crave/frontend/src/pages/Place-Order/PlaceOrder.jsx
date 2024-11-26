import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const { getTotalAmount } = useContext(StoreContext)
  const [showPlaced, setShowPlaced ] = useState(false)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" name="" id="" placeholder='First Name' />
          <input type="text" name="" id="" placeholder='Last Name' />
        </div>
        <input type="email" name="" id="" placeholder='Email Address' />
        <input type="text" name="" id="" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" name="" id="" placeholder='City' />
          <input type="text" name="" id="" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" name="" id="" placeholder='Zip Code' />
          <input type="text" name="" id="" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Deliver Fee</p>
              <p>${getTotalAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>${getTotalAmount() === 0 ? 0 : getTotalAmount() + 2}</b>
            </div>
            <button>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder