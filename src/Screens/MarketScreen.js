import React from "react"
import "./Css/MarketScreen.css"
import { Button, Row, Col, Image, Container } from "react-bootstrap"
import crypto_vector from "../crypto_vector_rmbg.png"
import boy_vector from "../boy_vector.png"

function MarketScreen() {
    return (
        <div className=" text-center market">
            <Container fluid>

            <Row>
                <Col md={6}>
                    <h4 className="market__text">You can see the today's market position and current prices<br /> of every crypto currency from here.click <br /> the below button and from there <br /> you can buy & sell the <br /> crypto...</h4>
                    <div className="d-flex">
                        <Image src={boy_vector} width="350rem" height="300rem" />
                        <a href="https://coinmarketcap.com/" target="/blank"><Button className="mt-5" variant="success">Buy / Sell</Button></a>
                    </div> 
                </Col>
                <Col md={6} className="p-0">
                    <Image className="market__vector p-0" src={crypto_vector} height="500rem" width="700rem"/>
                </Col>
            </Row>
            </Container>
        </div>
    )
}
export default MarketScreen