import React, {useContext} from 'react';
import './styles.css'

import Modal from './modal';
import GetTypes from './getTypes';



  export default class Card extends React.Component {
    constructor(){
      super()
      this.state = {
        pokeInfo:[]
      }
      
    }
  
          
    render(){
    return (
        // <div className="card-container">
        //     <h2>{props.name}</h2>
        //     <img src={props.img} alt={props.name} 
        // </div> 
        <div class="container-card">
            <div class="row-card">
              <div class={`column1 textStat  col-md-4 `}>
              <div class="card-content white-text">
              <div class="textName">#{this.props.index+1}</div>
              <div class="textName">{this.props.name.toLocaleUpperCase()}</div>
              </div> 
              </div>
              <div class="column2  col-md-4">
              <img className="imgPoke col-md-12" src={this.props.img} alt={this.props.name}/>
              </div>
              <div class="column3 black-text textStat  col-md-4 ">
              
              <div>
              <div className="titleBasic">BASE STATS</div>
                 <Modal pokeInfo={this.props.pokeInfo} pokemones={this.props.pokemones} pokeType={this.props.pokeType} />
             </div>
             <div>
             <GetTypes pokeType={this.props.pokeType}/>
             </div>
                 
              
              
          </div>
              </div>
              
          </div>
          
        
      
      
    )
    }
}
