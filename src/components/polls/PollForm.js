import React from 'react';
import PropTypes from 'prop-types';

export default function PollForm({ optionChange, questionChange, handleSubmit, onAdd }) {
  return (
      <>
        <header>
          <h2>PollForm</h2>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <label>Poll Question: </label>
            <input type='text' name='topic' onChange={questionChange}></input>
            <fieldset>
              <label>Choice 1: </label>
              <input type='text' name='option1' onChange={optionChange}></input>
              <button onAdd={onAdd}>ADD</button>
              <label>Choice 2:</label>
              <input type='text' name='option2' onChange={optionChange}></input>
              <button   onAdd={onAdd}>ADD</button>
              <label> Choice 3: </label>
              <input type='text' name='option3' onChange={optionChange}></input>
              <button onAdd={onAdd}>ADD</button>
            </fieldset>
            <button type='submit'>Submit</button>
          </form>
        </main>
      </>
  );
}


PollForm.propTypes =  {
  handleSubmit: PropTypes.func.isRequired,
  questionChange: PropTypes.func.isRequired,
  optionChange: PropTypes.func.isRequired,
  question: PropTypes.string,
  onAdd: PropTypes.func,
  option: PropTypes.string,
};
