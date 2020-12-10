import React from "react";
import MenuProfile from "./menuProfile";
import Navbar from "./navbar";
export default function Header(props) {
  return (
    <>
    <header className="navbarpoke">
      <div class="column-buttons">
        {props.logged ? <div/>:<Navbar/>}
      </div>
      <div className="column-profile">
      {props.logged ? 
      <MenuProfile 
      imgProfile={props.imgProfile} 
      nameProfile={props.nameProfile} 
      logout={props.logout} 
      logged={props.isLogged}/> : <div/>}
      </div>
    </header>
    </>
  );
}
