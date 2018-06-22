import React, {Component} from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

import './game.css';

export default class Game extends Component {
    constructor(props){
        super(props);        
        this.state = {
            guesses: [],
            randomNumber:  Math.floor(Math.random() * Math.floor(100)),
            feedback: "Make your guess!"        
        };
        this.submit = this.submit.bind(this);      

    }    

    submit(event){
        event.preventDefault();
        const guess=event.target.userGuess.value;
        this.compare(guess);
        this.setState({
            guesses: this.state.guesses.concat(guess)            
        });
    }


    compare(guess){
        //1-- if diff is > 50 -- cold
        //2 -- if diff is  between 25 and 50 it is kinda cold 
        //3 -- if the diff between 25  and 10 its kinda hot
        //4 -- if the diff is less than 10 its hot
        // if the diff is 0 user won the game 
        const difference = this.state.randomNumber >= guess? this.state.randomNumber - guess : guess- this.state.randomNumber;
        if(difference >= 50){
            this.setState({
                ...this.state,
                feedback: 'cold'
            });
        }else if(difference < 50 && difference >= 25){
            this.setState({
                ...this.state,
                feedback: 'kinda cold'
            });
        }else if(difference < 25 && difference >= 10){
            this.setState({
                ...this.state,
                feedback: 'kinda hot'
           });
        }else if(difference < 10 && difference >= 5){
            this.setState({
                ...this.state,
                feedback: 'hot'
           });
        }else if(difference < 5){
            this.setState({
                ...this.state,
                feedback: 'super hot'
           });
        }else if(difference === 0) {
            this.setState({
                ...this.state,
                feedback: 'You Won!'
           });
        }
    }

    render(){        
        return (
            <div>
                <Header />
                <div className="game">
                    <GuessSection submit={this.submit} feedback={this.state.feedback} />
                    <GuessCount count={this.state.guesses.length} />
                    <GuessList guesses={this.state.guesses} />
                </div>            
            </div>
        );
    }  
    
    


}

