import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
export default function MenuProfile(props) {
   
   return(<>
          <img className="imgProfile" src={`${props.imgProfile}`}></img>
           
            <DropdownButton
              menuAlign="right"
              title=""
              id="dropdown-menu-align-right-Danger"
            >
              <Dropdown.Item eventKey="1"> <span className="profileName">{props.nameProfile.toLocaleUpperCase()}</span></Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="2">Mensajes</Dropdown.Item>
              <Dropdown.Item eventKey="3">Configuración</Dropdown.Item>
              <Dropdown.Item onClick={props.logout}>Cerrar sesion</Dropdown.Item>
            </DropdownButton>
          
          </>
          )
        }