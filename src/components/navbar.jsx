import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
   
   return(<>
        <ul className="w100">
          <li class="ButtonNavBar">
              <Link to="/">Inicio</Link>
            </li>
            <li class="ButtonNavBar">
              <Link to="/registro">Registro</Link>
            </li>
            <li class="ButtonNavBar">
              <Link to="/panel">Pokedex</Link>
            </li>
          </ul>
          </>
          )
        }