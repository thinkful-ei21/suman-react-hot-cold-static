import React from 'react';

import './guess-form.css';

export default function GuessForm(props) { 
    // function submit(event){
    //     event.preventDefault();
    //     props.ref=`${event.target.userGuess.value}`;
    // }         
    return (
        <form onSubmit={(e) => props.submit(e)}>
            {/* console.log(e.target.userGuess.value);}}> */}
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

