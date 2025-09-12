import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setSearch } from '../store/productsSlice'
export default function Header(){
  const cartItems = useSelector(s => s.cart.items)
  const count = Object.values(cartItems).reduce((a,b)=>a+b.quantity,0)
  const navigate = useNavigate()
  return (
    <header className="header">
      <div className="brand" onClick={() => navigate('/')}>ShoppyGlobe</div>
      <div className="search-wrap">
        <SearchBox />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart-link">Cart ({count})</Link>
      </nav>
    </header>
  )
}
function SearchBox(){
  const search = useSelector(s => s.products.search)
  const dispatch = useDispatch()
  return (
    <input
      value={search}
      onChange={e => dispatch(setSearch(e.target.value))}
      placeholder="Search products..."
      className="search"
    />
  )
}
