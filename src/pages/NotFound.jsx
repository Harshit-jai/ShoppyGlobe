import React from 'react'
import { useLocation, Link } from 'react-router-dom'
export default function NotFound(){
  const loc = useLocation()
  return (
    <div className="center notfound">
      <h2>404 - Page Not Found</h2>
      <p>Unable to find <strong>{loc.pathname}</strong></p>
      <Link to="/" className="btn">Go Home</Link>
    </div>
  )
}
