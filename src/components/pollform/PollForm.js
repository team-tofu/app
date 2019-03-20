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
              <textarea type='text' name='text'></textarea>
            </label>
            <fieldset>
              <label>Answer One:
                <textarea name='one'></textarea>
              </label>
              <label>Answer Two:
                <textarea type='text' name='two'></textarea>
              </label>
              <label>Answer Three:
                <textarea type='text' name='three'></textarea>
              </label>
            </fieldset>
            <button type='submit'>Submit</button>
          </form>
        </main>
      </>
    );
  }
}

