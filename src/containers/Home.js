import React, { PureComponent } from 'react';
import PollForm from '../components/pollform/PollForm';

export default class Home extends PureComponent {
  handleSubmit = event => {
    event.preventDefault();
    console.log('submitted', event.target.text.value);
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
