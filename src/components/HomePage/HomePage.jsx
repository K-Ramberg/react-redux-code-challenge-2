import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const propTypes = {
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
	resetNumberToZero: PropTypes.func.isRequired,
	addCompany: PropTypes.func.isRequired,
	deleteCompany: PropTypes.func.isRequired,
	clearDirectory: PropTypes.func.isRequired,
	companies: PropTypes.array.isRequired,
	companyToAdd: PropTypes.object.isRequired
};

class HomePage extends Component {
	render() {
		const {	increment, decrement, resetNumberToZero, addCompany, deleteCompany, clearDirectory } = this.props;
		console.log(this.props)
		// const companyDirectory = this.props.companies.map((each)=>{
		// 	return (
		// 		<div>company placeholder</div>
		// 	)
		// })
		return (
			<React.Fragment>
				<div className="home__wrapper">
					<div className="home__abacus">
						<button	onClick={increment}>
							Increment
						</button>
						<button	onClick={decrement}>
							Decrement
						</button>
						<button	onClick={resetNumberToZero}>
							Reset Number
						</button>
						<button onClick={addCompany}>
							add company test
						</button>
						<button onClick={clearDirectory}>
							reset directory test
						</button>
						<button onClick={deleteCompany}>
							remove last company test
						</button>
					</div>
					<div>
						Code for Homepage goes here!
						{/* {companyDirectory} */}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

HomePage.propTypes = propTypes;
export default HomePage;