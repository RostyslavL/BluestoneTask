import React from 'react'
import {Card,Button, } from 'react-bootstrap'
import {Link} from 'react-router-dom';

const Product = ({product}) => {

    const countInStock = Object.values(product.images)

    return (
    <>
        {product.images.length > 0 ?
            Object.values(product.images).map((img) => img.url).flatMap((src) =>
                <Card className="my-3 p-4 rounded">
                     <h1><strong>{product.name.toUpperCase()}</strong></h1>
                       <Card.Img src={src} variant="top" /> 
                    <Card.Body>                
                            <Card.Title as="div">
                            <Link to={`/products/${product._id}`}>
                                <strong>{product.name.toUpperCase()}</strong>
                            </Link>
                                <hr/>
                                <Link to={`/products/${product._id}`}>
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
            )
            :
            (
                <Card className="my-3 p-4 rounded">
                    <h1><strong>{Object.values(product.images).length === 0  ? 'No Avialable' : product.name.toUpperCase() }</strong></h1>
                       <Card.Img src='./img/sample.jpg' variant="top" /> 
                    <Card.Body>                
                            <Card.Title as="div">                        
                                <strong>{product.name.toUpperCase()}</strong>
                                <hr/>
                                    <Button  className='btn-block btn-dark '
                                        type='button'
                                        disabled={true}
                                    > Go To &nbsp;
                                    <i className="fas fa-arrow-alt-circle-right"/>
                                    </Button>
                            </Card.Title>
                    </Card.Body>
                </Card>
            )}
    </>
    )
}

export default Product


