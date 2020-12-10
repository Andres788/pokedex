
import React from 'react';
import './styles.css';
import GetStats from './getStats';

export default class pokeInfo extends React.Component {
    constructor(props){
        super(props);
      
        this.state = {
            pokeInfo:[1,2,3]

        }
    }
    
        render(){
           
   return(
       <>
       
         <GetStats pokeInfo={this.props.pokeInfo}/>
         
          
        </>
   )
       
}  
    
        
}