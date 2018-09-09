import { connect } from 'react-redux';
import HomePage from 'components/HomePage';
import actions from 'store/features/clickCounter/actions'
import actions1 from 'store/features/directory/actions'

const mapDispatchToProps = dispatch => ({
	increment: () => dispatch(actions.incrementBy1()),
	decrement: () => dispatch(actions.decrementBy1()),
	resetNumberToZero: () => dispatch(actions.resetNumberToZero()),
	addCompany: () => dispatch(actions1.addCompany()),
	deleteCompany: () => dispatch(actions1.deleteCompany()),
	clearDirectory: () => dispatch(actions1.clearDirectory())
});

const mapStateToProps = state => ({
	companies: state.directory.companies,
	companyToAdd: state.directory.companyToAdd
  });

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);