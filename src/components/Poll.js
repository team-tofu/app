import React from 'react';
import propTypes from 'prop-types';

export default function Poll({ question, options }) {
  const optionsList = options.map((option, i) => {
    return <li key={i}>{option}</li>;
  });
  return (
    <>
    <h2>{question}</h2>
    <ul>{optionsList}</ul>
    </>
  );

}

Poll.propTypes = {
  question: propTypes.string.isRequired,
  options: propTypes.array
};
