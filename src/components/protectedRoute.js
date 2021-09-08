import {Route, Redirect} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "../utils/UserContext";
import * as path from "path";


const ProtectedRoute = ({component: Component, ...restOfProps}) => {

    const {user,setUser} = useContext(UserContext);


    return(
        <Route {...restOfProps}  render={(props) => user.isLoggedIn ? <Component {...props}/> : <Redirect to={'/'}/> } />
    )

}

export  default ProtectedRoute;