import reducer from './pollForm';
import {
  CREATE_NOTE,
  CREATE_NOTE_PENDING,
  CREATE_NOTE_ERROR
} from '../actions/pollForm';
import { exportAllDeclaration } from '@babel/types';

jest.mock('../services/polls.js');

describe('pollForm reducer', () => {
  let state;
  
  beforeEach(() => {
    state = {
      loading: false,
      error: null,
      question: 'What is your favorite animal?',
      option: 'Dog',
      options: ['Dog', 'Cat', 'Snake']
    };
  });
  it('handles the CREATE_NOTE action', () => {
    const updatedState = reducer(state, {
      type: CREATE_NOTE,
    });
    expect(updatedState).toEqual({
      loading: false, 
      error: null,
      question: 'What is your favorite animal?',
      option: 'Dog',
      options: ['Dog', 'Cat', 'Snake'],
    });
  });
});
