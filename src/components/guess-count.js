import React from 'react';

import './guess-count.css';

export default function GuessCount(props) {
    return (
        <p className="staticSentence">
            Guess #<span className="count">{props.count}</span>!
        </p>
    );
}
