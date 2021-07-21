import React from 'react';
import { Link } from 'react-router-dom';

const ProductScreen = () => {
    return (
        <div>
            <Link className='btn btn-dark btn-sm my-3' to='/'>
                <i className="fas fa-arrow-alt-circle-left"> Go Back </i>
            </Link>
            <h1>ProductScreen</h1>
        </div>
    )
}

export default ProductScreen
