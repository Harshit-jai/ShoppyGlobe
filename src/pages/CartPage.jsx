import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { Link, useNavigate } from 'react-router-dom'
export default function CartPage(){
  const items = useSelector(s => s.cart.items)
  const arr = Object.values(items)
  const total = arr.reduce((s,i)=>s + i.product.price * i.quantity, 0)
  const navigate = useNavigate()
  return (
    <div>
      <h1 className="page-title">Your Cart</h1>
      {arr.length === 0 ? (
        <div className="center">
          <p>Cart is empty</p>
          <button className="btn" onClick={() => navigate('/')}>Browse Products</button>
        </div>
      ) : (
        <div className="cart-page">
          <div className="cart-list">
            {arr.map(item => <CartItem key={item.product.id} item={item} />)}
          </div>
          <div className="cart-summary">
            <h3>Summary</h3>
            <div className="summary-row"><span>Items</span><span>{arr.length}</span></div>
            <div className="summary-row"><span>Total</span><span>₹{Math.round(total)}</span></div>
            <Link to="/checkout" className="btn">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </div>
  )
}
