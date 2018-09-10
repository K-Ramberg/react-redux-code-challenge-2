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

	constructor(props) {
		super(props)
		this.state = {
			companyToAdd: {
				name: '',
				address: '',
				revenue: '',
				phoneNumber: '',
				employees: []  
			}
		}
		this.changeOfForm = this.changeOfForm.bind(this)
		this.submitForm = this.submitForm.bind(this)
	}	

	changeOfForm(event) {
		const inputName = event.target.name
        const formInput = event.target.value
        const newState = {...this.state}
        newState.companyToAdd[inputName] = formInput
        this.setState(newState)
    }

	submitForm(event) {
		event.preventDefault()
		const newCompany = {...this.state.companyToAdd}
		this.props.addCompany(newCompany)
	}
	

	render() {
		const {	increment, decrement, resetNumberToZero, addCompany, deleteCompany, clearDirectory } = this.props;
		console.log(this.props)
		console.log(this.state)
		const companyDirectory = this.props.companies.map((each,i)=>{
			return (
				<div key={i}> 
					<h3>{each.name}</h3>
					<h5>Address: {each.address}</h5>
					<h5>Revenue: {each.revenue}</h5>
					<h5>Phone: {each.phoneNumber}</h5>
				</div>
			)
		})
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
						{companyDirectory}
						<form onSubmit={this.submitForm}>
							<label>Company Name:</label>
							<input type="text" name="name" onChange={this.changeOfForm} value={this.props.companyToAdd.name}/>
							<br/>
							<label>Address:</label>
							<input type="text" name="address" onChange={this.changeOfForm} value={this.props.companyToAdd.address}/>
							<br/>
							<label>Revenue:</label>
							<input type="text" name="revenue" onChange={this.changeOfForm} value={this.props.companyToAdd.revenue}/>
							<br/>
							<label>Phone: </label>
							<input type="text" name="phoneNumber" onChange={this.changeOfForm} value={this.props.companyToAdd.phoneNumber}/>	
							<br/>
							<button type="submit">Add Company</button>					
						</form>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

HomePage.propTypes = propTypes;
export default HomePage;