import React from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import "./Css/RegisterScreen.css"

function RegisterScreen() {
    return (
        <div className="container register"> 
            <Row className="justify-content-md-center mt-3">
                <Col sm={6}>
                    <Form >
                        <h2 className="mt-4 mb-4 text-center">REGISTER</h2>
      
                        <Form.Group controlId="Email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control required type="email" placeholder="Enter Email"></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="Password">
                            <Form.Label>Enter Password</Form.Label>
                            <Form.Control required type="password" placeholder="Enter Password"></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="Password">
                            <Form.Label>Re-Type Password</Form.Label>
                            <Form.Control required type="password" placeholder="Re-Type Password"></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="Address">
                            <Form.Label>Wallet Address</Form.Label>
                            <Form.Control required type="address" placeholder="Enter Wallet Address"></Form.Control>
                        </Form.Group>
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">I agree with terms & conditions.</label>
                        </div>

                        <div className="text-center">
                            <Button type="submit" className="mx-auto mt-4 mb-4">LOG IN</Button>
                        </div>

                    </Form>
                </Col>
            </Row>
        </div>

    )
}

export default RegisterScreen;
