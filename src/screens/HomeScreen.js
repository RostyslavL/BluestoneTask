import React , { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import Data from '../data/data.json';
import { Row , Col} from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import { listProducts } from '../actions/productActions'
import Message from '../components/Message'

const HomeScreen = () => {
    
    const productList = useSelector(state => state.productList)
    const {loading, error, products } = productList

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])

    // console.log(data);

    return (
        <>
            <h1>Products</h1>
                {loading ? 
                (<Loader />) :
                 error ? 
                ( <Message variant="danger">{error}</Message>)  : 
                (
                <Row>
                    {products && products.length > 0 &&  products.map((product)=>(

                        <Col
                            key={product._id}
                            sm={8}
                            md={6}
                            lg={4}
                            xlg={3}
                            >
                            {/* <h2>{product.name.toUpperCase()}</h2> */}

                            <Product product={product}/>
                        </Col>
                    ))}
                    </Row>)
                }
        </>
    )
}

export default HomeScreen
