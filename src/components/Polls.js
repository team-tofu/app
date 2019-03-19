import React, { PureComponent } from 'react';

const polls = [
  { question: 'some question', options: ['option1', 'option2'] },
  { question: 'some question', options: ['option1', 'option2'] },
  { question: 'some question', options: ['option1', 'option2'] },
  { question: 'some question', options: ['option1', 'option2'] }
];

export default class Polls extends PureComponent {
  render() {
    const pollList = polls.map((poll, i) => {
      return <li key={i}>{poll.question}</li>;
    });
    return (
      <ul>
        {pollList}
      </ul>
 
    );

  }
}
