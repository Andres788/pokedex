import React, {useState} from "react";
import './App.css';
import firebase, {auth} from "./firebase/config";
import SignIn from "./components/SignIn";
import {Route, Switch, useHistory} from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import Pokedex from "./components/pokedex";


function App() {
  let history = useHistory();
  //Provedor de autenticacion con google
  let provider = new firebase.auth.GoogleAuthProvider();
  let facebookProvider = new firebase.auth.FacebookAuthProvider();
  let [user, setUser] = useState({});
  let [imgProfile, setImgProfile] = useState("https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd-300x238.png");
  let [isLogged, setIsLogged] = useState(false);
  let [nameProfile, setnameProfile] = useState('user')

  const signInGoogle = () => {
    auth.signInWithPopup(provider)
    .then(result => {
      let user = result.user;
      setUser(user);
      setImgProfile(user.photoURL);
      setnameProfile(user.displayName)
      setIsLogged(true);
      history.push('/panel');
    }).catch(error => {
      setIsLogged(false);
      console.log(error);
    })
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.session)
    .then(result => {
      let user = result.user;
      setUser(user);
      setIsLogged(true);
      history.push('/panel');
    }).catch(error => {
      setIsLogged(false);
      console.log(error);
});
  }

  const signInFacebook = () => {
    auth.signInWithPopup(facebookProvider).then(result => {
      let token = result.credential.accessToken;
      let user = result.user;
      setUser(user);
      setImgProfile(user.photoURL);
      setnameProfile(user.displayName);
      setIsLogged(true);
      history.push('/panel');
      console.log(user);
      

    }).catch(error => {
      console.log(error);
    })
  }
  const logout =()=>{
    firebase.auth().signOut().then(function() {
      setImgProfile("https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png");
      setnameProfile("user");
      setIsLogged(false);

      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }
  
  return (
    
      <div className="App">
        
        <Header imgProfile={imgProfile} nameProfile={nameProfile} logout={logout} logged={isLogged} />
        <Switch>
          <Route path="/" exact>
            <SignIn 
            signInGoogle={signInGoogle} 
            signInFacebook={signInFacebook} 
            logged={isLogged} 
            setIsLogged={setIsLogged} 
            history={history}
            setImgProfile={setImgProfile}/>
          </Route>
          <Route path="/registro">
            <SignUp />
          </Route>
          <PrivateRoute path="/panel" logged={isLogged} user={user} signInGoogle={signInGoogle} signInFacebook={signInFacebook}>
            <div className="ContainerPokedex">
            <Pokedex />
            </div>
          </PrivateRoute>
        </Switch>
      </div>
  );
}

export default App;
