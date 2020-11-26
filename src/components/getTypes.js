import React from 'react';
export default class GetTypes extends React.Component {
    constructor(props){
        super(props);
      
        this.state = {
            pokeInfo:[1,2,3]

        }
        
    }
  
    typeImg=(type)=>{
        
        let img;
        if(type=='fire'){
            console.log('ingreso')
            img="https://upload.wikimedia.org/wikipedia/commons/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg"
        }
        if(type=='grass'){
            img="https://upload.wikimedia.org/wikipedia/commons/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg" 
        }
        if(type=='poison'){
            img="https://upload.wikimedia.org/wikipedia/commons/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg" 
        }
        if(type=='flying'){
            img="https://upload.wikimedia.org/wikipedia/commons/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg" 
        }
        if(type=='water'){
            img="https://upload.wikimedia.org/wikipedia/commons/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg" 
        }
        if(type=='bug'){
            img="https://upload.wikimedia.org/wikipedia/commons/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg" 
        }
        if(type=='normal'){
            img="https://upload.wikimedia.org/wikipedia/commons/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg" 
        }
        if(type=='electric'){
            img="https://upload.wikimedia.org/wikipedia/commons/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg" 
        }
        if(type=='fairy'){
            img="https://upload.wikimedia.org/wikipedia/commons/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg" 
        }
        if(type=='ground'){
            img="https://upload.wikimedia.org/wikipedia/commons/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg" 
        }
        if(type=='fighting'){
            img="https://upload.wikimedia.org/wikipedia/commons/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg" 
        }
        if(type=='psychic'){
            img="https://upload.wikimedia.org/wikipedia/commons/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg" 
        }
        if(type=='steel'){
            img="https://upload.wikimedia.org/wikipedia/commons/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg" 
        }
        if(type=='ice'){
            img="https://upload.wikimedia.org/wikipedia/commons/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg" 
        }
        if(type=='ghost'){
            img="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg" 
        }
        if(type=='rock'){
            img="https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg" 
        }
        if(type=='dragon'){
            img="https://upload.wikimedia.org/wikipedia/commons/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg" 
        }
        if(type=='dark'){
            img="https://upload.wikimedia.org/wikipedia/commons/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg" 
        }
        return(img)
    }
        render(){
           
            return(
                <div className="containerTypes">
                <div className="titleBasic">TYPES</div>
                  {this.props.pokeType.map((pokemon,index)=>{
                      return(
                      <div><img className="imgType" key={index} src={`${this.typeImg(pokemon.type.name)}`}></img></div>)
                  })}
                   {/* {this.props.pokeType.map(pokemon=>{
                      return(
                      <div>{pokemon.type.name}</div>)
                  })} */}
                 </div>
            )
       
}  
    
        
}