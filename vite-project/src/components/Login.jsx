import React, { useState } from "react";
import { Form, Button, Nav, Alert } from "react-bootstrap";
import { http } from "../config/config";
// import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const [data, setData] = useState();
  const [msg, setMsg] = useState();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post(`http://localhost:5001/auth`, data).then((res) => {
  //     res.setMsg(res.data).catch(() =>  console.log(er.message));
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    http
      .post("/auth", data)
      .then((res) => {
        if (res.data.status === 5911) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "LogIn SuccessFully",
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            // icon: 'Failed',
            title: "Incorrect user Id or password",
            timer: 2500,
          });
        }
        setMsg([res.data]);
      })
      .catch((er) => console.log(er.message));
    console.log(msg);
  };

  return (
    <>
      
     

      <Form onChange={handleChange} onSubmit={handleSubmit} className="">
        {/* {
        msg?.find((m) => m.path === "mismatch")?.message && (
          <Alert variant="danger">
              {msg?.find((m)=>m.path==="mismatch")?.message}
          </Alert>
        )
      }
      {
        msg?.find((m) => m.path === "match")?.message && (
          <Alert variant="success">
              {msg?.find((m)=>m.path==="match")?.message}
          </Alert>
        )
      } */}
        <Form.Group className="mx-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;
