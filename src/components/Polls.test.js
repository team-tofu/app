import React from 'react';
import renderer from 'react-test-renderer';
import Polls from './Polls';
describe('Polls Test', () => {
  it('Renders list of polls', () => {

    const tree = renderer.create(
      <Polls /> 
    );
    expect(tree).toMatchSnapshot();
  });
});
