import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PollForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }
  render() {
    return (
      <form>
        <h2>PollForm</h2>
      </form>
    );
  }
}

