import React , {useState, useEffect} from 'react';
// import Data from '../data/data.json';
import { Row , Col} from 'react-bootstrap';
import Product from '../components/Product';
// import Loader from '../components/Loader';

const HomeScreen = () => {

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
            // console.log(response)
            return response.json()
        })
          .then(function(data) {
            // console.log(data)
            setData(data)
        });
    }
    useEffect(()=>{
      getData()
    },[])

    console.log(data);

    return (
        <>
            <Row>
                {data && data.length > 0 &&  data.map((product)=>(
                    
                    <Col
                        key={product._id}
                        sm={8}
                        md={6}
                        lg={4}
                        xlg={3}
                        >
                        <h2>{product.name.toUpperCase()}</h2>
                        
                        <Product product={product}/>
                    </Col>
                ))}
                </Row>
            
        </>
    )
}

export default HomeScreen
