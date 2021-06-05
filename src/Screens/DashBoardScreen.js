import React from 'react'
import "./Css/DashBoardScreen.css"
import { Row, Col, Card, Button, Container } from 'react-bootstrap'
import { Link } from "react-router-dom"
// import Stock from "./Stock"

function DashBoardScreen() {
    return (
        <div className="dashboard">
            <Container>
            <Row>
                <Col md={4}>
                    <Card className="text-center card" style={{ fontFamily:"sans-serif", height: '30rem'}}>
                        <Card.Body className="mt-2 card__body">
                            <Card.Title><h5>PLAN - 1</h5></Card.Title>
                            <hr />
                            <h6><b>10% + interest after 10 hr</b></h6>
                            <hr />
                            <h2>10%</h2><h6>in 10 hrs.</h6>
                            <hr />
                            <div className="req1">
                                <h5>MAXIMUM : <b>7999</b></h5>
                                <h5>MINIMUM : <b>300</b></h5>
                                <h5>REFERRAL : <b>5%</b></h5>
                                <h5>GATEWAY : <b>BTC</b></h5>
                            </div>
                            <Link to="/deposite"><Button id="btn11" variant="primary">INVEST</Button></Link>
                        </Card.Body>    
                    </Card>                
                </Col>

                <Col md={4}>
                    <Card className="text-center card" style={{ fontFamily:"sans-serif", height: '30rem'}}>
                        <Card.Body className="mt-2 card__body">
                            <Card.Title><h5>PLAN - 2</h5></Card.Title>
                            <hr />
                            <h6><b>10% + interest after 10 hr</b></h6>
                            <hr />
                            <h2>15%</h2><h6>in 9 hrs.</h6>
                            <hr />
                            <div className="req1">
                                <h5>MAXIMUM : <b>99999</b></h5>
                                <h5>MINIMUM : <b>8000</b></h5>
                                <h5>REFERRAL : <b>5%</b></h5>
                                <h5>GATEWAY : <b>BTC</b></h5>
                            </div>
                            <Link to="/deposite"><Button id="btn11" variant="primary">INVEST</Button></Link>
                        </Card.Body>    
                    </Card>                
                </Col>

                <Col md={4}>
                    <Card className="text-center card" style={{ fontFamily:"sans-serif", height: '30rem'}}>
                        <Card.Body className="mt-2 card__body">
                            <Card.Title><h5>PLAN - 3</h5></Card.Title>
                            <hr />
                            <h6><b>10% + interest after 10 hr</b></h6>
                            <hr />
                            <h2>25%</h2><h6>in 8 hrs.</h6>
                            <hr />
                            <div className="req1">
                                <h5>MAXIMUM : <b>80000</b></h5>
                                <h5>MINIMUM : <b>10000</b></h5>
                                <h5>REFERRAL : <b>5%</b></h5>
                                <h5>GATEWAY : <b>BTC</b></h5>
                            </div>
                            <Link to="/deposite"><Button id="btn11" variant="primary" type="submit">INVEST</Button></Link>
                        </Card.Body>    
                    </Card>                
                </Col>
            </Row>  

            <div className="form-check form">
                <input className="form-check-input" type="checkbox" id="check__plan1" /> 
                <label className="form-check-label lable1" for="check__plan1">Plan - 1</label>
                <p>In this plan,you have to invest minimum 300 rps &  maximum 7999 rps to get +10% interest of your's investment.This is the best plan to invest low amount of money.</p>
                <br />
                <input className="form-check-input" type="checkbox" id="check__plan2" /> 
                <label className="form-check-label lable2" for="check__plan2">Plan - 2</label>
                <p>In this plan,you have to invest minimum 300 rps &  maximum 7999 rps to get +10% interest of your's investment.This is the best plan to invest low amount of money.</p>
                <br />
                <input className="form-check-input" type="checkbox" id="check__plan3" /> 
                <label className="form-check-label lable3" for="check__plan3">Plan - 3</label>
                <p>In this plan,you have to invest minimum 300 rps &  maximum 7999 rps to get +10% interest of your's investment.This is the best plan to invest low amount of money.</p>
            </div>
            <div className="text-center">
                <Link to="/deposite"><Button id="btn12" varient="primary" type="submit">MAKE AN INVESTMENT</Button></Link>
            </div>
            </Container>
        </div>
    )
}

export default DashBoardScreen
