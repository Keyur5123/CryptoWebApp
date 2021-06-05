import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import HomeScreen from './HomeScreen'
import DashBoardScreen from './DashBoardScreen'

function Screen() {
    return (
        <div>
          <Route path="/Login">
            <LoginScreen />
          </Route>

          <Route path="/Register">
            <RegisterScreen />
          </Route>

          <Route path="/Home">
            <HomeScreen />
          </Route>
          <Route path="/DashBoard">
            <DashBoardScreen />
          </Route>
        </div>
    )
}

export default Screen
