import React from "react"
import { Container, Table } from "@material-ui/core";
import { Link } from "react-router-dom"
import "./Css/HomeScreen.css"
import { Row, Col, Carousel, Card, Button } from "react-bootstrap";
import chart1 from "../chart1.PNG"
import chart2 from "../Chart2.PNG"

function HomeScreen() {
    return(
        <div className="Home">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block pl-2 w-100"
                        src={chart1}
                        alt="flow chart"    
                        height="350"
                    />
                    <Carousel.Caption>
                        <h3 className="carousel__title1">Every Crypto's position</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block pl-2 w-100"
                        src={chart2}
                        alt="Today's Market"
                        height="350"
                    />
                    <Carousel.Caption>
                        <h3 className="carousel__title2">Today's Market Prices</h3>

                    </Carousel.Caption>
                </Carousel.Item>
  
                <Carousel.Item>
                    <img
                        className="d-block pl-2 w-100"
                        src="https://forextraininggroup.com/wp-content/uploads/2016/01/EURUSD-Japanese-Candlestick-chart-1024x394.png"
                        alt="Third slide"
                        height="350"
                    />
                    <Carousel.Caption>
                        <h3 className="carousel__title3">Market position</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br /><br />
        <Container>
        
            <Row>
                <Col sm={6}>
                    <Card className="text-center card1" style={{ width: '30rem', fontFamily:"sans-serif", height: '20rem'}}>
                        <Card.Body className="mt-2">
                            <Card.Title><h5 style={{color: "ThreeDShadow"}}>Account Balance</h5></Card.Title>
                            <h2>INR 0.00</h2>
                            
                            <div className=" text-decoration-none text-muted mb-2 card__body">
                                <Link to="/deposite"><Button id="btn1" variant="primary">DEPOSITE</Button></Link>
                                <Link to="/withdraw"><Button id="btn2" variant="primary">WITHDRAW</Button></Link>
                                <hr />
                            </div>
                            
                            <Table id="t1">                                
                                <tr>
                                    <th colSpan="5">Recent portfolios (Net Total: 0.00 rps.)</th>
                                </tr>
                                <tr>
                                    <th>##</th>
                                    <th>Ref.ID</th> 
                                    <th>Amount</th>
                                    <th>Item</th>
                                    <th>Interest</th>
                                </tr>
                                <tr>
                                    <th>-</th>
                                    <th>-</th> 
                                    <th>-</th>
                                    <th>-</th>
                                    <th>-</th>
                                </tr>                                
                            </Table>


                        </Card.Body>
                    </Card> 
                    
                </Col>

                <Col sm={6}>
                <Table className="text-center">                                
                                <tr>
                                    <th colSpan="5">Recent Transection (Net Total: 0.00 rps.)</th>
                                </tr>
                                <tr>
                                    <th>##</th>
                                    <th>Item</th> 
                                    <th>Type</th>
                                    <th>Old Interest</th>
                                    <th>Amount</th>
                                </tr>
                                <tr>
                                    <th>1</th>
                                    <th>PLAN-1</th> 
                                    <th>BTC</th>
                                    <th>0</th>
                                    <th>500</th>
                                </tr>                                
                                <tr>
                                    <th>2</th>
                                    <th>PLAN-1</th> 
                                    <th>BTC</th>
                                    <th>0</th>
                                    <th>100</th>
                                </tr>                                
                                <tr>
                                    <th>3</th>
                                    <th>PLAN-1</th> 
                                    <th>BTC</th>
                                    <th>0</th>
                                    <th>300</th>
                                </tr>                                
                                <tr>
                                    <th>4</th>
                                    <th>PLAN-2</th> 
                                    <th>BTC</th>
                                    <th>0</th>
                                    <th>3000</th>
                                </tr>                                
                                <tr>
                                    <th>5</th>
                                    <th>PLAN-1</th> 
                                    <th>BTC</th>
                                    <th>0</th>
                                    <th>300</th>
                                </tr>                                                                
                                <tr>
                                    <th></th>
                                    <th>-</th> 
                                    <th>-</th>
                                    <th>-</th>
                                    <th>-</th>
                                </tr>                                
                                <tr>
                                    <th>-</th>
                                    <th>-</th> 
                                    <th>-</th>
                                    <th>-</th>
                                    <th>-</th>
                                </tr>                                
                                <tr>
                                    <th>-</th>
                                    <th>-</th> 
                                    <th>-</th>
                                    <th>-</th>
                                    <th>-</th>
                                </tr>                                
                                <tr>
                                    <th>-</th>
                                    <th>-</th> 
                                    <th>-</th>
                                    <th>-</th>
                                    <th>-</th>
                                </tr>                                
                            </Table>


                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default HomeScreen;