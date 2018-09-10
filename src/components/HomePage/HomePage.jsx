import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './styles.less';

const propTypes = {
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
	resetNumberToZero: PropTypes.func.isRequired,
	addCompany: PropTypes.func.isRequired,
	deleteCompany: PropTypes.func.isRequired,
	clearDirectory: PropTypes.func.isRequired,
	companies: PropTypes.array.isRequired,
	addEmployee: PropTypes.func
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
			},
			employeeToAdd: {
				name: 'test',
				address: 'tester',
				employerIndex: 0
			}
		}
		this.changeOfForm = this.changeOfForm.bind(this)
		this.submitForm = this.submitForm.bind(this)
		this.changeOfEmployeeForm = this.changeOfEmployeeForm.bind(this)
		this.submitEmployee = this.submitEmployee.bind(this)
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
		 this.setState({ companyToAdd: {
			name: '',
			address: '',
			revenue: '',
			phoneNumber: '',
			employees: []  
		 }})
	}

	changeOfEmployeeForm(event) {
		const inputName = event.target.name
        const formInput = event.target.value
        const newState = {...this.state}
        newState.employeeToAdd[inputName] = formInput
        this.setState(newState)
    }
	
	submitEmployee(event) {
		event.preventDefault()
		const newEmployee = {...this.state.employeeToAdd}
		this.props.addEmployee(newEmployee)
		this.setState({ employeeToAdd: {
			name: '',
			address: '',
			employerIndex: 0  
		 }})
	}

	render() {
		const {	increment, decrement, resetNumberToZero, addCompany, deleteCompany, clearDirectory } = this.props;
		const companyDirectory = this.props.companies.map((each,i)=>{
			return (
				<div key={i}> 
					<h3>{each.name}</h3>
					<h5>Address: {each.address}</h5>
					<h5>Revenue: {each.revenue}</h5>
					<h5>Phone: {each.phoneNumber}</h5>
					<Link to={`/${i}`}>See Details</Link>
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
						<button onClick={() => addCompany(this.state.companyToAdd)}>
							add company test
						</button>
						<button onClick={clearDirectory}>
							reset directory test
						</button>
						<button onClick={deleteCompany}>
							remove last company test
						</button>
					</div>
					<button onClick={this.submitEmployee}> test employee</button>
					<div>
						Code for Homepage goes here!
						{companyDirectory}
						<form onSubmit={this.submitForm}>
							<label>Company Name:</label>
							<input type="text" name="name" onChange={this.changeOfForm} value={this.state.companyToAdd.name}/>
							<br/>
							<label>Address:</label>
							<input type="text" name="address" onChange={this.changeOfForm} value={this.state.companyToAdd.address}/>
							<br/>
							<label>Revenue:</label>
							<input type="text" name="revenue" onChange={this.changeOfForm} value={this.state.companyToAdd.revenue}/>
							<br/>
							<label>Phone: </label>
							<input type="text" name="phoneNumber" onChange={this.changeOfForm} value={this.state.companyToAdd.phoneNumber}/>	
							<br/>
							<button type="submit">Add Company</button>					
						</form>
						<form onSubmit={this.submitEmployee}>
							<label>Company Name:</label>
							<input type="text" name="name" onChange={this.changeOfEmployeeForm} value={this.state.employeeToAdd.name}/>
							<br/>
							<label>Address:</label>
							<input type="text" name="address" onChange={this.changeOfEmployeeForm} value={this.state.employeeToAdd.address}/>
							<br/>
							<label>Choose Employer</label>
							<br/>
							<button type="submit">Add Employee</button>					
						</form>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

HomePage.propTypes = propTypes;
export default HomePage;