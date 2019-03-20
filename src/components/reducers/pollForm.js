import {
  CREATE_POLL,
  CREATE_POLL_PENDING, 
  CREATE_POLL_ERROR,
  UPDATE_QUESTION,
  UPDATE_QUESTION_PENDING,
  UPDATE_QUESTION_ERROR,
  UPDATE_OPTION,
  UPDATE_OPTION_ERROR,
  UPDATE_OPTION_PENDING
} from '../actions/pollForm';

const initialState = {
  loading: false,
  error: null,
  question: '',
  option: '',
  options: [],
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POLL:
    case UPDATE_QUESTION:
    case UPDATE_OPTION:
      return {
        ...initialState,
        question: action.payload.question,
        option: action.payload.option,
        options: [...state.options, action.payload.option]
      };
    case CREATE_POLL_PENDING:
    case UPDATE_QUESTION_PENDING:
    case UPDATE_OPTION_PENDING: 
      return {
        ...state, loading: true
      };
    case CREATE_POLL_ERROR:
    case UPDATE_QUESTION_ERROR:
    case UPDATE_OPTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

