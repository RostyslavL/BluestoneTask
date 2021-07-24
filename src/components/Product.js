import React , {useState, useEffect} from 'react'
import {Card,Button, } from 'react-bootstrap'
import {Link} from 'react-router-dom';
// import Data from '../data/data.json';

const Product = ({product}) => {

    const [data,setData] = useState([]);

    const dataUrl =  'data.json'

    const getData = () =>{
        fetch(dataUrl
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
          .then(function(response){
            return response.json()
        })
          .then(function(data) {
            setData(data)
        });
    }
    useEffect(()=>{
      getData()
    },[])

    
    const countInStock = product.images.length
    
    const src = data.map((item) => item.images.map((img) => img.url)).flatMap((i) => i)

    console.log(src)

    return (
    <>
        
        {src.map((item) => 
            <Card className="my-3 p-4 rounded">
                   <Card.Img src={item} variant="top" /> 
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
        )}

    </>
    )
}

export default Product


