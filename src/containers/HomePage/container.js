import { connect } from 'react-redux';
import HomePage from 'components/HomePage';
import actions from 'store/features/clickCounter/actions'
import actions1 from 'store/features/directory/actions'

const mapDispatchToProps = dispatch => ({
	increment: () => dispatch(actions.incrementBy1()),
	decrement: () => dispatch(actions.decrementBy1()),
	resetNumberToZero: () => dispatch(actions.resetNumberToZero()),
	addCompany: (payload) => dispatch(actions1.addCompany(payload)),
	deleteCompany: () => dispatch(actions1.deleteCompany()),
	clearDirectory: () => dispatch(actions1.clearDirectory()),
	addEmployee: (payload) => dispatch(actions1.addEmployee(payload))
});

const mapStateToProps = state => ({
	companies: state.directory.companies
  });

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);