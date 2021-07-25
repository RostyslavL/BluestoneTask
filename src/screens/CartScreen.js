import React , {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import { 
    Row, 
    Col, 
    ListGroup, 
    Image, 
    Form, 
    Button, 
    Collapse,
    Card 
} from 'react-bootstrap'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = ({ match, location }) => {
    
    const productID = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    const { cartItems } = cart
 
    useEffect(() => {
        if(productID){
            dispatch(addToCart(productID, qty))
        }
    }, [dispatch, productID, qty])

    const removeFromCartandler = (id) => {
        dispatch(removeFromCart(id))
    }
    const [open, setOpen] = useState(false)
    
    return(
        <>
        <Link className='btn btn-dark btn-sm my-3' to={`/products/${productID}`}>
                <i className="fas fa-arrow-alt-circle-left"> Go Back </i>
            </Link>
            <Row>
            <Col md={8} >
                <h1> Shopping Cart </h1>
                { 
                    cartItems.length === 0 
                    ? 
                    <Message variant="warning"> 
                        Your Cart is Empty 
                            <Link to='/'> Go Back </Link>
                    </Message> 
                    :
                    (
                        <ListGroup variant="fulsh">
                            { cartItems.map(item => (
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={2} >
                                        {item.images.map(img=>img.url).flatMap((src) =>
                                            <Image src={src} alt={item.name} fluid rounded/>
                                        )}
                                        </Col>
                                        
                                        <Col md={3}>
                                            <Link to={`/products/${item.product}`}> <h1><strong>{item.name.toUpperCase()}</strong></h1></Link>
                                        </Col>
                                        <Col md={2} >
                                            $ {item.price}
                                        </Col>
                                        <Col md={2}>
                                                <Form.Control 
                                                    as="select"
                                                    size="md"
                                                    value={item.qty} 
                                                    custom
                                                    
                                                    onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                                    {
                                                        [...Array(item.countInStock).keys()].map((x) => (
                                                            <option 
                                                                key={x + 1} 
                                                                value={x + 1}
                                                            >
                                                                {x + 1}
                                                            </option>
                                                        ))
                                                    }    
                                                </Form.Control> 
                                        </Col>
                                        <Col md={2}>
                                            <Button
                                                type="button"
                                                variant="dark"
                                                onClick={() => removeFromCartandler(item.product)}
                                            >
                                                <i className="fas fa-trash"  />
                                            </Button>
                                        </Col>
                                        <Col md={2}>
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
                                                    {item.description} 
                                                </i>
                                            </h4> 
                                        </div>
                                        </Collapse> 
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )
                }
            </Col>

            <Col md={4} >
                <Card className="my-5">
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2> Subtotal ({cartItems.reduce( (acc, item) => acc + item.qty, 0)}) items</h2> 
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
        </>
    )
}

export default CartScreen
