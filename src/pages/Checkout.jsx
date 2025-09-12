import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../store/cartSlice'
import { useNavigate } from 'react-router-dom'
export default function Checkout(){
  const items = useSelector(s => Object.values(s.cart.items))
  const total = items.reduce((s,i)=>s + i.product.price * i.quantity, 0)
  const [form, setForm] = useState({ name: '', email: '', address: '' })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const placeOrder = e => {
    e.preventDefault()
    dispatch(clearCart())
    alert('Order placed')
    navigate('/')
  }
  return (
    <div>
      <h1 className="page-title">Checkout</h1>
      <div className="checkout">
        <form className="checkout-form" onSubmit={placeOrder}>
          <label>Name
            <input required value={form.name} onChange={e=>setForm({...form, name: e.target.value})}/>
          </label>
          <label>Email
            <input required type="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})}/>
          </label>
          <label>Address
            <textarea required value={form.address} onChange={e=>setForm({...form, address: e.target.value})}></textarea>
          </label>
          <div className="summary-inline">
            <div>Order Total</div>
            <div>₹{Math.round(total)}</div>
          </div>
          <button className="btn" type="submit">Place Order</button>
        </form>
        <div className="order-review">
          <h3>Review Items</h3>
          {items.length === 0 ? <div>No items</div> : items.map(i => (
            <div key={i.product.id} className="review-item">
              <img src={i.product.thumbnail} alt={i.product.title} loading="lazy"/>
              <div>
                <div className="product-title">{i.product.title}</div>
                <div>Qty: {i.quantity}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
