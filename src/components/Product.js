import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';


const Product = ({product}) => {

    // const images = product.images.map((image) => {return image.url})
    // const srcs = images.map((src) => {return src.toString()})
    
    // const {images} = product
    // const {src,name} = images

    // console.log(product.images)

    // console.log(product)
    // console.log(src)
    // console.log(product)
  

    

    return (
    <>
        <Card className="my-3 p-4 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={`srcs`} variant="top"></Card.Img>
            </Link>
            <Card.Body>                
                    <Card.Title as="div">
                    <Link to={`/product/${product._id}`}>
                        <strong>{product.name}</strong>
                    </Link>
                        <hr/>
                        <h3>{product.number}</h3>
                    </Card.Title>
            </Card.Body>
        </Card>
    </>
    )
}

export default Product


