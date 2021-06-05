import React from "react"
import {BrowserRouter as Router, Redirect, Route,Switch } from "react-router-dom"
import "./bootstrap.min (1).css"
import Header from "./Components/Header";
import SideBarScreen from "./Screens/SideBarScreen";
import HomeScreen from "./Screens/HomeScreen"
import DashBoardScreen from "./Screens/DashBoardScreen"
import LoginScreen from "./Screens/LoginScreen"
import RegisterScreen from "./Screens/RegisterScreen";
import DepositeScreen from "./Screens/DepositeScreen";
import WithdrawScreen from "./Screens/WithdrawScreen";
import MarketScreen from "./Screens/MarketScreen";
function App() {
  return (
      <Router >

        <Switch>
          <main >
        <Header />

          <Route path="/" exact>
            <div className="d-flex">
               <SideBarScreen />
              <HomeScreen />
            </div>
          </Route>
          <Route path="/Home" exact>
            <div className="d-flex">
               <SideBarScreen />
              <HomeScreen />
            </div>
          </Route>

          <Route path="/DashBoard">
            <div className="d-flex">
              <SideBarScreen /> 
              <DashBoardScreen />
            </div>
          </Route>

          <Route path="/Deposite">
            <div className="d-flex">
              <SideBarScreen /> 
              <DepositeScreen />
            </div>
          </Route>

          <Route path="/Withdraw">
            <div className="d-flex">
              <SideBarScreen /> 
              <WithdrawScreen />
            </div>
          </Route>


          <Route path="/Market">
            <div className="d-flex">
              <SideBarScreen />
              <MarketScreen />
            </div>
          </Route>

          <Route path="/Login">
            <LoginScreen />
          </Route>

          <Route path="/Register">
            <RegisterScreen />  
          </Route>

        </main>
            
        </Switch>
        
      </Router>
      
  );
}

export default App;
