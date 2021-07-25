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

import Data from '../data/data.json';
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'

const ProductScreen = ({history, match}) => {
    
    // const dispatch = useDispatch()

    // const productDetails = useSelector((state) => state.productDetails)
    // const { loading, error, product } = productDetails

    // useEffect(() =>{
    //     dispatch(listProductDetails(match.params.id))
    // },[dispatch, match])

    const product_bak = Data.find((el) => el._id === match.params.id)

    const countInStock = product_bak.images.length
    
    // console.log(product)
    // console.log(product.images)

    const [{url: src , name: neme}] = product_bak.images

    // const [{ name: neme}] = product.images;


    // const src1 = Data.map((item)=>item.images.map((img)=>img.url)).flatMap(i=>i)

    // console.log(src1)
    // console.log(src)
    // console.log(neme)
    console.log(product_bak)

    console.log(match)

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
                <h1>Product Name: {product_bak.name.toUpperCase()}</h1>
                <h2>Prouct ID : <b>{product_bak._id}</b> </h2> 
            {/* {loading ? (
                <Loader />
                ) : error ? (
                <Message variant='danger'>{error}</Message>
                ) : ( */}
                    <Row>
                        <Col md={6}> 
                            <Image src={src} alt={neme} fluid />           
                        </Col>
                        <Col md={3}>
                          <ListGroup variant='flush'>
                            <ListGroup.Item>
                              <h3> Product Name : </h3> <i>{product_bak.name}</i>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <h3> Product Number :</h3> <i>{product_bak.number}</i>
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
                                                    {product_bak.description} 
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
                                    {countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
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
                                        {[...Array(countInStock).keys()].map(
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
                                  disabled={countInStock === 0}
                                >
                                  Add To Cart
                                </Button>
                              </ListGroup.Item>
                            </ListGroup>
                          </Card>
                        </Col>
                    </Row>
                {/* )
            } */}
        </>
    )
}

export default ProductScreen
