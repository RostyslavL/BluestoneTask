import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';

const Product = ({product}) => {
    
    const countInStock = product.images.length

    return (
    <>
        <Link to={`/product/${product._id}`}>

            <Card className="my-3 p-4 rounded">
                <Link to={`/product/${product._id}`}>
                    <Card.Img src={`src}`} variant="top"></Card.Img>
                </Link>
                <Card.Body>                
                        <Card.Title as="div">
                        <Link to={`/product/${product._id}`}>
                            <strong>{product.name.toUpperCase()}</strong>
                        </Link>
                            <hr/>
                            <Link to={`/product/${product._id}`}>
                                <Button  className='btn-block btn-dark '
                                    type='button'
                                    disabled={countInStock === 0}
                                > Go To &nbsp;
                                <i className="fas fa-arrow-alt-circle-right"/>
                                </Button>
                            </Link>
                        </Card.Title>
                </Card.Body>
            </Card>
        </Link>
    </>
    )
}

export default Product


