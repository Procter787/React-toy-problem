import React, { Component } from 'react';

export default class FilterObject extends Component {

constructor(){
    this.state ={
        unFilteredArray: [],
        userInput: '',
        filteredArray: []
    }
}


    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>FilterObject</h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
            </div>
            
            
        )
        }
}
