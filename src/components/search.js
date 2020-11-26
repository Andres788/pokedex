
import React from 'react';
 class SearchSideBar extends React.Component{
    constructor(){
        super();
        this.state = {value:1};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: parseInt(event.target.value)});
      }
    
      handleSubmit(event) {
       this.props.fns(this.state.value);
       
        event.preventDefault();
      }
    render(){
    return(
        
            <div className="search-style ">
           
                <input 
                    type="text" 
                    placeholder= "Buscar número de pokemon"
                    className="inputSearch"
                    onChange={this.handleChange}
                   
                />
              <div>
                  <button className="botonimagen2" onClick={this.handleSubmit}></button>
              </div>
                           </div>
            
        
    )
    }
}

export default SearchSideBar;