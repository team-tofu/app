import PollForm from '../../components/polls/PollForm';
import { connect } from 'react-redux';
import { getQuestion, getOption, getOptions, isPollFormLoading } from '../../components/selectors/pollForm';
import { createPoll, updateQuestion, updateOption, addOption } from '../../components/actions/pollForm';

const mapStateToProps = state => ({
  question: getQuestion(state),
  option: getOption(state),
  options: getOptions(state),
  loading: isPollFormLoading(state)
});

const mapDispatchToProps = dispatch => ({        
  handleSubmit(event) {
    event.preventDefault();
    dispatch(createPoll());
  },

  questionChange({ target }) {
    dispatch(updateQuestion(target.value));
  },

  optionChange({ target }) {
    dispatch(updateOption(target.value));
  },
  onAdd() {
    console.log('hello');
    dispatch(addOption());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PollForm);
