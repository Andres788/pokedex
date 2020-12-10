import React from "react";
import {Route} from "react-router-dom";
import SignIn from "./SignIn";


export default function PrivateRoute(props){
    return (
        <Route path={props.path} render={
            () => props.logged ? (React.cloneElement(props.children, {user: props.user})) : ((<><h1>Debes iniciar sesion para ingresar al pokedex</h1>, <SignIn signInGoogle={props.signInGoogle} signInFacebook={props.signInFacebook} /></>))
        } />
    )
}