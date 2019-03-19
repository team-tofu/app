import React, { PureComponent } from 'react';
import PollForm from '../components/pollform/PollForm';

export default class Home extends PureComponent {
  handleSubmit = () => {
    console.log('submitted');
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
