import React from 'react';
export default class GetStats extends React.Component {
    constructor(props){
        super(props);
      
        this.state = {
            pokeInfo:[1,2,3]

        }
    }
    typeImg=(type)=>{
        
        let img;
        if(type=='hp'){
            img="https://i.pinimg.com/originals/26/bf/47/26bf47ae347d0a4238b12abd8f0d55a4.png"
        }
        if(type=='attack'){
            img="https://cdn.iconscout.com/icon/premium/png-512-thumb/game-sword-attack-fight-weapon-57280.png" 
        }
        if(type=='defense'){
            img="https://img1.freepng.es/20180204/pow/kisspng-shield-clip-art-blank-shield-logo-vector-png-5a7769fe5a2686.6419025415177753583693.jpg" 
        }
        if(type=='special-attack'){
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEjaoMQ-Ki6kO5s0J_HkpCTq3QWmK3GParVA&usqp=CAU" 
        }
        if(type=='special-defense'){
            img="https://e7.pngegg.com/pngimages/598/367/png-clipart-command-conquer-3-tiberium-wars-global-defense-initiative-symbol-logo-symbol-miscellaneous-logo.png" 
        }
        if(type=='speed'){
            img="https://icons-for-free.com/iconfiles/png/512/fast+flash+good+light+speed+icon-1320195378845312678.png" 
        }  
        return(img)
    }
    typestat=(type)=>{
        let name;
        if(type=='hp'){
            name="HP" 
        }
        if(type=='attack'){
            name="ATTACK" 
        }
        if(type=='defense'){
            name="DEFENSE" 
        }
        if(type=='special-attack'){
            name="SP-ATTACK" 
        }
        if(type=='special-defense'){
            name="SP-DEFENSE" 
        }
        if(type=='speed'){
            name="SPEED" 
        }
        return(name)
    }
        render(){
           
   return(

       <div className="containersstats">
       <div className="titleBasic">BASE STATS</div>
         {this.props.pokeInfo.map((pokemon,index)=>{
             return(
             <div className="containerstats" key={index}><img className="imgstat" src={`${this.typeImg(pokemon.stat.name)}`}></img>  {this.typestat(pokemon.stat.name)} : {pokemon.base_stat}</div>)
         })}
          {/* {this.props.pokeType.map(pokemon=>{
             return(
             <div>{pokemon.type.name}</div>)
         })} */}
        </div>
   )
       
}  
    
        
}