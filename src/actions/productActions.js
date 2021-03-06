import {
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL ,
    
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,

} from '../constants/productConstants.js'
import axios from 'axios'

const dataUrl =  'http://localhost:8000'

export const listProducts = () => async (dispatch) =>{
    try {
        dispatch({type: PRODUCT_LIST_REQUEST })

        const {data} = await axios.get(`${dataUrl}/products`)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.responce && error.responce.data.message 
            ? error.responce.data.message 
            : error.message
        })
    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST })
  
      const {data} = await axios.get(`${dataUrl}/products/${id}`)
       
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }


  export const updateProduct = (product) => async (
    dispatch, 
    ) =>{
    try {
        dispatch({
            type: PRODUCT_UPDATE_REQUEST
        })

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.put(
          `${dataUrl}/products/${product._id}`,
          product,
          config
        ) 
       
      dispatch({ 
        type: PRODUCT_UPDATE_SUCCESS,
        payload: data
     })
        
    } catch (error) {
        dispatch({
          type: PRODUCT_UPDATE_FAIL,
          payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}