import React , {useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux'
import { setPageName } from '../../store/actions/userActions'

import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import { NavLink } from "react-router-dom";


function Auth() {
	const dispatch = useDispatch()
	useEffect(() => { dispatch(setPageName("Login")) });

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
		  <h1>My Profile</h1>



        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/auth" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default Auth
