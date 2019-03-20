import React from 'react';
import PropTypes from 'prop-types';

export default function PollForm({ topic, optionChange, topicChange, onSubmit, onAdd }) {
  return (
      <>
        <header>
          <h2>PollForm</h2>
        </header>
        <main>
          <form onSubmit={onSubmit}>
            <label>Poll Question: 
              <textarea type='text' name='topic' value={topic} onChange={topicChange}></textarea>
            </label>
            <fieldset>
              <label>Choice 1:
                <textarea name='one' onChange={optionChange}></textarea>
                <button onAdd={onAdd}></button>
              </label>
              <label>Choice 2:
                <textarea type='text' name='two' onChange={optionChange}></textarea>
                <button onAdd={onAdd}></button>
              </label>
              <label> Choice 3:
                <textarea type='text' name='three' onChange={optionChange}></textarea>
                <button onAdd={onAdd}></button>
              </label>
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
  topic: PropTypes.string.isRequired
};
