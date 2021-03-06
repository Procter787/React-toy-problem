import React, { Component } from 'react';

export default class FilterString extends Component {

constructor(){
    this.state = {
        names: ['ricardo', 'montoya', 'pancho', 'jaime', 'felipe'],
        userInput: '',
        filteredArray: []
    };
}



    render() {
        return (
            <div className="puzzleBox filterStringPB">
            <h4>FilterString</h4>
            <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
            
            </div>

        )
        }
}

