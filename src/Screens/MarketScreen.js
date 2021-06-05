import React from "react"
import "./Css/MarketScreen.css"
import { Button } from "react-bootstrap"

function MarketScreen() {
    return (
        <div className="market">
            <a href="https://coinmarketcap.com/" target="/blank"><Button varient="primary">Click Here</Button></a>
        </div>
    )
}
export default MarketScreen