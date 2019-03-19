import React, { PureComponent } from 'react';
import PollForm from '../components/pollform/PollForm';

export default class Home extends PureComponent {
  handleSubmit = event => {
    event.preventDefault();
    console.log('poll question', event.target.text.value);
    console.log('answer one', event.target.one.value);
    console.log('answer two', event.target.two.value);
    console.log('answer three', event.target.three.value);
    event.target.text.value = null;
  };

  render() {
    return (
      <>
        <h1>Home</h1>
        <PollForm handleSubmit={this.handleSubmit}/>
      </>
    );
  }
  
}
