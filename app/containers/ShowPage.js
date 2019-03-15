import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Show from '../components/Show';
import * as PlayerbarActions from '../actions/counter';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayerbarActions, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Show);
