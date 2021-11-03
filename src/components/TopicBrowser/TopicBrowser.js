import React, { Component } from 'react';

import EvenAndOdd from '../topics/EvenAndOdd'
import FilterObject from '../topics/FilterObject'
import FilterString from '../topics/FilterString'
import Palindrome from '../topics/Palindrome'
import Sum from '../topics/Sum'

export default class TopicBrowser extends Component {
    render() {
    return (
        <div classname="puzzleFeed">
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
        </div>
    )
    }
}