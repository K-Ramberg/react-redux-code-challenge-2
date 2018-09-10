import { connect } from 'react-redux';
import HomePage from 'components/HomePage';
import actions1 from 'store/features/directory/actions'

const mapDispatchToProps = dispatch => ({
	addCompany: (payload) => dispatch(actions1.addCompany(payload)),
	deleteCompany: () => dispatch(actions1.deleteCompany()),
	clearDirectory: () => dispatch(actions1.clearDirectory()),
	addEmployee: (payload) => dispatch(actions1.addEmployee(payload))
});

const mapStateToProps = state => ({
	companies: state.directory.companies
  });

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);