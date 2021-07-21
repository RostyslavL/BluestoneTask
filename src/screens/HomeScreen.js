import React from 'react';
import Data from '../data/data.json';
import { Row , Col} from 'react-bootstrap';
import Product from '../components/Product';

const HomeScreen = () => {

    return (
        <>
         <>
            <Row>
                {Data.map((product)=>(
                    <Col
                        key={product._id}
                        sm={8}
                        md={6}
                        lg={3}
                        xlg={2}
                        >
                        <h2>{product.name}</h2>
                        <Product product={product}/>
                    </Col>
                ))}
                </Row>
                
            </>   
        </>
    )
}

export default HomeScreen
