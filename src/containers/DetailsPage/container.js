import { connect } from 'react-redux';
import DetailsPage from 'components/DetailsPage';

const mapStateToProps = state => ({
	companies: state.directory.companies
});

export default connect(mapStateToProps)(DetailsPage);