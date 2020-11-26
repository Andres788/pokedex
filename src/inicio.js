import React from 'react';
import Card from './components/card';
import Pagination from './components/pagination';
import './App.css';
import './components/styles.css'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemones: [],
            pokeInfo: [{stat:{name:""}}],
            pokeType:[{type:{name:""}}],
            currentPage: 1,
            pagesShow:[0,1,2,3,4,5,6,7],
            pokemonPerPage: 1,
            initPoke: 1,
           
        }
    }

    componentDidMount() {
        const limit = this.state.pokemonPerPage;
        const url = 'https://pokeapi.co/api/v2/pokemon';
        //Consumir la API de pokeapi
        fetch(`${url}?limit=${limit}`)
            .then(response => response.json())
            .then(data => this.setState({pokemones: data.results}))
            .catch( error => {
              console.log(error);
            })
            
    }
    fns=(index)=> {
      this.getInfo(index);
      this.fetchPage(index);
    }
    getInfo=(index)=> {
      let newArrayPoke=[]
      fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
          .then(response => response.json())
          .then(data => this.setState({pokeInfo: data.stats}))
          .catch( error => {
            console.log(error);
          })
          fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
          .then(response => response.json())
          .then(data => this.setState({pokeType: data.types}))
          .catch( error => {
            console.log(error);
          })
          
  }
  
    fetchPage = (requestPage) => {
      //1. Completar el método para poder obtener los pokemones dependiendo de la página solicitada
      const limit = this.state.pokemonPerPage;
      const url = 'https://pokeapi.co/api/v2/pokemon';
     
      this.setState({initPoke:requestPage, currentPage:requestPage});
      fetch(`${url}?limit=${limit}&offset=${(requestPage - 1) * this.state.pokemonPerPage}`)
            .then(response => response.json())
            .then(data => this.setState({pokemones: data.results}))
            .catch( error => {
              console.log(error);
            }
            )
            let cantPageShow=6;
            let pages = [];
            if(requestPage >5){
            let limiteInferior = requestPage - 4;
            let limiteSuperior = requestPage + 1;
            for(let i = limiteInferior; i<=limiteSuperior; i++){
            pages.push(i);
            }
            }else{
            for(let i = 0; i<=cantPageShow; i++){
            pages.push(i);}}
            this.setState({currentPage: requestPage})
            this.setState({pagesShow:pages})
          
            
    }

    render() {
        return (
          
            <div className="pokedex-container">
              {
                
                this.state.pokemones.map( (pokemon, index) => {  
                  if(this.state.initPoke>1){ 
                   index=((index)+(this.state.pokemonPerPage*(this.state.initPoke-1)))
                  }
                  //2. Solucionar el problema de obtener las imagenes de los pokemones con id < 10, > 10, > 100      
                  
                  let pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${(index+1>9)&&(index+1<100) ? ("0"+(index+1)):((index>98) ?((index+1)):("00"+(index+1)))}.png`
                  
                  return (
                    <Card key={index + 1} name={pokemon.name}
                     img={pokemonImg}  
                     pokemones={this.state.pokemones}
                     pokeName={this.state.pokemones.name}
                     pokeInfo={this.state.pokeInfo}
                     pokeType={this.state.pokeType} 
                     index={index}
                     currentPage={this.state.currentPage} 
            fetchPageFn={this.fetchPage} 
            paginationShow={this.paginationShow} 
            ShowPages={this.state.pagesShow}
            fns={this.fns} />
                  )
                })
              }
               
            <Pagination currentPage={this.state.currentPage} 
            fetchPageFn={this.fetchPage} 
            paginationShow={this.paginationShow} 
            ShowPages={this.state.pagesShow}
            fns={this.fns} />
            
            
            </div>
           
            
        )
    }
}
