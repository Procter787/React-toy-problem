import React, { Component } from 'react';

export default class Sum extends Component {

constructor(){

    this.state = {
        number1: 0,
        number2: 0,
        sum: null
    }
}


    render() {
        return (
            <div>
            <h4>Sum</h4>
            <input className="inputLine" type="number" onChange={ (e) => this.updateNumber1(e.target.value) }></input>
            <input className="inputLine" type="number" onChange={ (e) => this.updateNumber2(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.add(this.state.number1, this.state.number2) }> Add </button>
            <span className="resultsBox"> Sum: {this.state.sum} </span>
            </div>
        )
        }
}
