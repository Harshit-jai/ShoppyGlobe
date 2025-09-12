import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLoading, setProducts, setError } from '../store/productsSlice'
export default function useProducts(){
  const dispatch = useDispatch()
  useEffect(() => {
    let mounted = true
    dispatch(setLoading(true))
    fetch('https://dummyjson.com/products')
      .then(res => { if(!res.ok) throw new Error('Failed to fetch'); return res.json() })
      .then(data => { if(mounted) dispatch(setProducts(data.products)) })
      .catch(err => { if(mounted) dispatch(setError(err.message || 'Error')) })
    return () => { mounted = false }
  }, [dispatch])
}
