import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {
    Form, 
    Button, 
    Row, 
    Col
} from 'react-bootstrap'

import FormContainer from '../components/FormContainer'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault()
    }

    return (
    <>    
        <Link className='btn btn-dark btn-sm my-3' to='/'>
            <i className="fas fa-arrow-alt-circle-left"> Go Back To Home Page</i>
        </Link>
        <FormContainer>
       <h1>Sign In</h1>
        <Form onSubmit={submitHandler} >
         <Form.Group controlId='email'  >
           <Form.Label>Email Address</Form.Label>
           <Form.Control
             type='email'
             placeholder='Enter email'
             value={email}
             onChange={(e) => setEmail(e.target.value)}
           ></Form.Control>
         </Form.Group>
         <Form.Group controlId='password'>
           <Form.Label>Password</Form.Label>
           <Form.Control
             type='password'
             placeholder='Enter password'
             value={password}
             onChange={(e) => setPassword(e.target.value)}
           ></Form.Control>
         </Form.Group>
         <Button 
            type='submit' 
            variant='dark'
            size='sm'
            block
            >
           Sign In
         </Button>
       </Form>
       <Row className='py-3'>
         <Col>
           New Customer?{' '}
           <Link to={'/register'}>
             Register
           </Link>
         </Col>
       </Row> 
     </FormContainer>
    </>
    )
}

export default LoginScreen

