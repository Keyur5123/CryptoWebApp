import React from 'react'
import { Col, Form, Row, Button, Image } from 'react-bootstrap'
import { auth, provider} from "../firebase";
import { Container } from '@material-ui/core';
import { Link } from "react-router-dom"
import avatar from "../user.png"
import "./Css/LoginScreen.css"

function LoginScreen() {

    return (
        <Container>
        <div className="login"> 
            <Form >
                <Row className="justify-content-md-center mt-3">
                    <Col sm={6}>
                        <div className="d-flex mt-3 justify-content-center text-center">
                            <Image src={avatar} alt="avatar" width="100px" height="100px" roundedCircle></Image>
                            <h2 className="mt-4 ml-1 text-center">LOGIN</h2>
                        </div>
      
                        <Form.Group controlId="Email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control required type="email" placeholder="Enter Email"></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="Password">
                            <Form.Label>Email Password</Form.Label>
                            <Form.Control required type="password" placeholder="Enter Password"></Form.Control>
                        </Form.Group>

                        <div className="text-center">
                            <Button type="submit" className="mx-auto mt-3">LOG IN</Button>
                            <h6 className="mt-2 mb-2 text-center">OR</h6>
                            <Button className="mb-4" onClick={()=>auth.signInWithRedirect(provider)}>SIGN IN WITH GOOGLE</Button>
                        </div>
                </Col>
            </Row>
                    </Form>
        </div>
            <div className="text-center">
                <h5 className="mt-4">New User ? &nbsp;<Link to="/register">Register</Link></h5>
            </div>

        </Container>

    )
}

export default LoginScreen
