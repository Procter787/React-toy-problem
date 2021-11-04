import React, { Component } from 'react';

export default class Palindrome extends Component {

constructor(){

    this.state = {
        userInput: '',
        palindrome: ''
    };
}


    render() {
        return (
            <div className="pussleBox palindromeP">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }> Check </button>
            <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
            </div>
        )
        }
}
