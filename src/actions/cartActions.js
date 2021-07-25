import axios from 'axios'
import {
    CART_ADD_ITEM, 
    CART_REMOVE_ITEM, 
}  from '../constants/cartConstants'


const dataUrl =  'http://localhost:8000'

export const addToCart = (id, qty) => async(dispatch, getState) =>{
    
    const {data} = await axios.get(`${dataUrl}/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            images: data.images,
            number: data.number,
            description: data.description,
            countInStock: data.countInStock,
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
export const removeFromCart = (id) => (dispatch, getState) =>{
    dispatch({
        type: CART_REMOVE_ITEM,
        payload:id,
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
