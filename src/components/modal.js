import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import PokeInfo from './searchStats'

class MODAL extends React.Component{
  state={
    abierto: false,
  }

  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  }

  render(){

    // const modalStyles={
    //   position: "absolute",
    //   top: '50%',
    //   left: '50%',
    //   transform: 'translate(-50%, -50%)'
    // }
    return(
      <>
 
        <div className="secundario">
          <Button className="botonimagen" onClick={this.abrirModal}></Button>
         </div>

         <Modal isOpen={this.state.abierto}>
           <ModalHeader>
               INFO POKEMON
          </ModalHeader>
          <ModalBody>
              <PokeInfo pokeInfo={this.props.pokeInfo} pokemones={this.props.pokemones} pokeType={this.props.pokeType}/>
          </ModalBody>

        <ModalFooter>
        
            <Button color="danger" onClick={this.abrirModal}>Cerrar</Button>
        </ModalFooter>
      </Modal>
      </>
    )
  }
}

export default MODAL;