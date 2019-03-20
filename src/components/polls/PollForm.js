import React from 'react';
import PropTypes from 'prop-types';

export default function PollForm({ option, question, optionChange, questionChange, onAdd }) {
  return (
      <>
        <header>
          <h2>PollForm</h2>
        </header> 
        <main>
          <form>
            <label>Poll Question: </label>
            <input type='text' name='topic' value={question} onChange={questionChange}></input>
            <fieldset>
              <label>Add an Option: </label>
              <input type='text' name='option' value={option} onChange={optionChange}></input>
              <button type='button' onClick={onAdd}>ADD</button>
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
  options: PropTypes.array,
};
