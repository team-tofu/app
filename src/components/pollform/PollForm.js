import React from 'react';
import PropTypes from 'prop-types';

export default function PollForm({ question, option, optionChange, topicChange, onSubmit, onAdd }) {
  return (
      <>
        <header>
          <h2>PollForm</h2>
        </header>
        <main>
          <form onSubmit={onSubmit}>
            <label>Poll Question: </label>
            <input type='text' name='topic' value={question} onChange={topicChange}></input>
            <fieldset>
              <label>Choice 1: </label>
              <input type='text' name='one' value={option} onChange={optionChange}></input>
              <button onAdd={onAdd}>ADD</button>
              <label>Choice 2:</label>
              <input type='text' name='two' value={option} onChange={optionChange}></input>
              <button onAdd={onAdd}>ADD</button>
              <label> Choice 3: </label>
              <input type='text' name='three' value={option} onChange={optionChange}></input>
              <button onAdd={onAdd}>ADD</button>
            </fieldset>
            <button type='submit'>Submit</button>
          </form>
        </main>
      </>
  );
}


PollForm.propTypes =  {
  onSubmit: PropTypes.func.isRequired,
  topicChange: PropTypes.func.isRequired,
  optionChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired
};
