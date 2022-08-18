import axios from 'axios'
import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { http} from '../config/config'
import Swal from 'sweetalert2'
function Signup() {
    const [data, setData] = useState()

    const handleChange = (e) => {
      setData({ ...data, [e.target.name]:e.target.value })
    
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(data);
      http.post('/', data).then((res) => {
        if (res.status===201) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'SignUp Successfully',
            timer: 1500
          })
      }}).catch((er)=>console.log(er.message))
    }

  return (
      <div>

<Form onChange={handleChange} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Name</Form.Label>
      <Form.Control name="name" type="text" placeholder="Enter your Full Name" />
        </Form.Group>
        
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Age</Form.Label>
      <Form.Control name="age" type="number" placeholder="Enter mobile age" />
    </Form.Group>
  

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control name='email' type="email" placeholder="Enter email"  />
    </Form.Group>

    
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control name="password" type="password" placeholder="Password" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>

    </div>
  )
}

export default Signup