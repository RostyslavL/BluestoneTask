import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Card, ListGroup,  } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'

const ProductEditScreen = ({ match, history }) => {
  
  const productId = match.params.id

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImage] = useState([{}])
  const [url, setUrl] = useState('')
  const [urlName, setUrlName] = useState('')

  const entries =   new Map([['url',`${url}`],['name' ,`${urlName}`]])

  const obj = Object.fromEntries(entries);
  
  console.log(obj);

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails
  
  const productUpdate = useSelector((state) => state.productUpdate)
  const { loading: loadingUpdate, error:errorUpdate, success: successUpdate } = productUpdate


  useEffect(() => {
    if(successUpdate){
      dispatch({type: PRODUCT_UPDATE_RESET})
        history.push(`/products/${productId}`)
    }else{
      if (product._id === productId ) {
            dispatch(listProductDetails(productId))
        } else {
          setName(product.name)
          setNumber(product.number)
          setDescription(product.description)
          setImage(product.images)
          setUrl(url)
          setUrlName(urlName)
        }
    }
    
  }, [dispatch, history, productId, product, successUpdate, productDetails, name, url, urlName])

  const submitHandler = (e) => {
    e.preventDefault()
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: productId,
        name,
        number,
        description,
        images,
        })
    )
  }

  return (
    <>
       <Link className='btn btn-dark btn-sm my-3' to='/'>
                <i className="fas fa-arrow-alt-circle-left"> Go Back To Home Page </i>
            </Link>
      <Card>
      <ListGroup variant='flush'>
        <ListGroup.Item className="py-4">
          <FormContainer>
            <h1>Edit Product</h1>
            {loadingUpdate && <Loader />}
            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                  <Form.Label><h2> Product Name</h2></Form.Label>
                  <Form.Control
                      type='name'
                      placeholder='Enter name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                ></Form.Control>
                </Form.Group>

                <Form.Group controlId='number'>
                  <Form.Label><h2> Product Number</h2></Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter number'
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='description'>
                  <Form.Label>
                      <h2>
                        <i className="fas fa-pen">
                          <b> &nbsp; Description</b>
                        </i>
                      </h2>
                      </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Provide Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='url'>
              <Form.Label>
                    <h2>
                    <i className="fas fa-link">
                          <b>&nbsp; Image Url</b>
                        </i>
                    </h2>
                        </Form.Label>
              <Form.Control
                type='text'
                placeholder='Provide URL'
                value={url}
                onChange={(e) => setUrl([e.target.value])}
              ></Form.Control>

              <Form.Group controlId='urlName'>
              <Form.Label>
                    <h2>
                    <i className="fas fa-link">
                          <b>&nbsp; Image urlName</b>
                        </i>
                    </h2>
                        </Form.Label>
              <Form.Control
                type='text'
                placeholder='Provide urlName'
                value={urlName}
                onChange={(e) => setUrlName([e.target.value])}
              ></Form.Control>
            </Form.Group>

            </Form.Group>
             
                <Button  type='submit' className='btn btn-dark btn-sm' block>
                  Update
               </Button>
              </Form>
            )}
          </FormContainer>
          </ListGroup.Item>
        </ListGroup>
    </Card>
    </>
  )
}

export default ProductEditScreen