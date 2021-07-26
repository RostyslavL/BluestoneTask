import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Row, 
    Col, 
    Image, 
    ListGroup, 
    Card, 
    Button, 
    Form ,
    Collapse
} from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'

const ProductScreen = ({history, match}) => {
    
    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() =>{
        dispatch(listProductDetails(match.params.id))
    },[dispatch, match])

    const {images} = product
    
    const [open, setOpen] = useState(false)
    const [qty, setQty] = useState(1)

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
      }

    return (
        <>
            <Link className='btn btn-dark btn-sm my-3' to='/'>
                <i className="fas fa-arrow-alt-circle-left"> Go Back </i>
            </Link>
                <h1>Product Name: {product.name}</h1>
                <h2>Prouct ID : <b>{product._id}</b> </h2> 
            {loading ? (
                <Loader />
                ) : error ? (
                <Message variant='danger'>{error}</Message>
                ) : (
                    <Row>
                        <Col md={6}> 
                        {images ?
                          Object.values(images).map((img) => img.url).flatMap((src) =>
                             <Image src={src} alt={product.name} fluid />            
                            )
                            :(
                              <Image src='sample.jpg' alt={product.name} fluid />            
                            )
                          } 
                        </Col>
                        <Col md={3}>
                          <ListGroup variant='flush'>
                            <ListGroup.Item>
                              <h2> Product Name : </h2> <i>{product.name}</i>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <h2> Product Number :</h2> <i>{product.number}</i>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <Button
                                        className="btn btn-dark btn-lg my-3"
                                        onClick={() => setOpen(!open)}
                                        aria-controls="description-collapse-text"
                                        aria-expanded={open}
                                    >
                                        Description
                                    </Button> 
                                    <Collapse in={open}>
                                        <div id="description-collapse-text">
                                            <h4> 
                                                <i>
                                                    {product.description} 
                                                </i>
                                            </h4> 
                                        </div>
                                        </Collapse> 
                                    </ListGroup.Item>
                          </ListGroup>
                        </Col>
                        <Col md={3}>
                          <Card>
                            <ListGroup variant='flush'>
                              <ListGroup.Item>
                                <Row>
                                  <Col>Status:</Col>
                                  <Col>
                                    {product.id > 0 ? 'In Stock' : 'Out Of Stock'}
                                  </Col>
                                </Row>
                              </ListGroup.Item>

                              <ListGroup.Item>
                                  <Row>
                                    <Col>Qty</Col>
                                    <Col>
                                      <Form.Control
                                        as='select'
                                        value={qty}
                                        onChange={(e) => setQty(e.target.value)}
                                      >
                                        {[...Array(product.id ).keys()].map(
                                          (x) => (
                                            <option key={x + 1} value={x + 1}>
                                              {x + 1}
                                            </option>
                                          )
                                        )}
                                      </Form.Control>
                                    </Col>
                                  </Row>
                                </ListGroup.Item>

                              <ListGroup.Item>
                                <Button
                                  onClick={addToCartHandler}
                                  className='btn-block btn-dark '
                                  type='button'
                                  disabled={product.id  === 0}
                                >
                                  Add To Cart
                                </Button>
                                
                              </ListGroup.Item>
                              <ListGroup.Item>

                              <Link className='btn btn-dark btn-sm my-3' to={`/products/${product._id}/edit`}>                              
                                <Button 
                                      className='btn-block btn-dark'
                                      type='button'  
                                      >
                                    <i className="fas fa-edit"> Edit Product </i>
                                </Button>
                                </Link>
                              </ListGroup.Item>
                            </ListGroup>
                          </Card>
                        </Col>
                    </Row>
               )
            }
        </>
    )
}

export default ProductScreen
