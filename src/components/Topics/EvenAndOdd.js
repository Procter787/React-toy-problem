import React, { Component } from 'react';

export default class EvenAndOdd extends Component {

constructor(){
    
    this.state ={
    evenArray: [],
    oddArray: [],
    userInput: ''
    }

}


render() {
    return (
        <div classname="puzzleBox evenAndOddPB">
        
        <h4> Evens And Odds </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
        <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) }</span>
        <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) }</span>


        </div>
        
    )
    }
}