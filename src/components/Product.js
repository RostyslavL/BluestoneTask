import React from 'react'
import {Card} from 'react-bootstrap'


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
        <Card className="my-3 p-4 rounded">
            <a href={`/product/${product._id}`}>
                <Card.Img src={`srcs`} variant="top"></Card.Img>
            </a>
            <Card.Body>                
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                        <hr/>
                        <h3>{product.number}</h3>
                    </Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Product


