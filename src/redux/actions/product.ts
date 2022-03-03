import { Dispatch } from "redux"
import axios from 'axios'

import { CREATE_NEW_PRODUCT, GET_PRODUCT_SUCCESS, Product, ProductActions, SEARCH_KEYWORD } from "../../types"
// import { CircularProgress } from "@material-ui/core"

export const fetchProduct = () => {
    return async (dispatch: Dispatch) => {
        const response = await fetch(`${process.env.REACT_APP_BASE_ENDPOINT}/api/v1/products`)
        const data = await response.json()
        dispatch(getProductsSuccess(data))
    }
}
export const getProductsSuccess = (data: Product[]): ProductActions => {
    return {
      type: GET_PRODUCT_SUCCESS,
      payload: {
        data,
      },
    }
  }

export const createProduct = (data: Product, history: any) => {
  return async (dispatch: Dispatch) => {
    axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/products`, data)
      .then( res => {
        if(res.data){
          return history.push('/product')
        }
      })
      .catch( err => console.log(err))

  }
}


export const editProduct = (data: Product, history: any) => {
  return async (dispatch: Dispatch) => {
    axios.put(`${process.env.REACT_APP_BASE_ENDPOINT}/products/${data._id}`, data)
      .then( res => {
        if(res.data){
          fetchProduct()
          history.push('/product');
        }
      })
      .catch( err => console.log(err))

  }
}

export const deleteProduct = (id: string, history: any) => {
  return async (dispatch: Dispatch) => {
    axios.delete(`${process.env.REACT_APP_BASE_ENDPOINT}/products/${id}`)
      .then( res => {
        if(res.data) {
          fetchProduct()
          return history.push('/product') 
        }
      })
      .catch( err => console.log(err))

  }
}

export const addProduct = (data: Product): ProductActions => {
  return {
    type: CREATE_NEW_PRODUCT,
    payload: {
      data,
    }
  }
}

export const searchProduct = (text: string, history: any): ProductActions => {
  // history.push(`${process.env.REACT_APP_BASE_ENDPOINT}/product`)
  return {
    type: SEARCH_KEYWORD,
    payload: {
      text,
    }
  }
}