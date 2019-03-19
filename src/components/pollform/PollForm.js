import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PollForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <>
        <header>
          <h2>PollForm</h2>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <label>Poll Question: 
              <input type='text' name='text'></input>
            </label>
            <button type='submit'>Submit</button>
          </form>
        </main>
      </>
    );
  }
}

