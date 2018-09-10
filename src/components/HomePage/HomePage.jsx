import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './styles.less';

const propTypes = {
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
				name: '',
				address: '',
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
			employerIndex: this.state.employeeToAdd.employerIndex  
		 }})
	}

	render() {
		const {	deleteCompany, clearDirectory } = this.props;
		const companyDirectory = this.props.companies.map((each,i)=>{
			return (
				<div className="company__card" key={i}> 
					<div className="company__end company__top">{each.name}</div>
					<div className="company__label">Address:</div>
					<div className="company__info">{each.address}</div>
					<div className="company__label">Revenue:</div>
					<div className="company__info">{each.revenue}</div>
					<div className="company__label">Phone:</div>
					<div className="company__info">{each.phoneNumber}</div>
					<div className="company__end company__bottom"><Link className="link" to={`/${i}`}>Company Overview</Link></div>
				</div>
			)
		})
		const companyFormSelect = this.props.companies.map((each,i)=>{
			return (
				<option key={i} value={i}>{each.name}</option>
			)
		})
		return (
			<React.Fragment>
				<div className="home__wrapper">
					<div className="home__widget home__main">
						<div className="home__heading">Companies</div>
						{companyDirectory}
						<div>
							<button onClick={clearDirectory}>
								reset directory test
							</button>
							<br/>
							<button onClick={deleteCompany}>
								remove last company test
							</button>
						</div>
					</div>
					<div className="home__side">
						<div className="home__widget">
							<div className="home__heading">Create new Company</div>
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
						</div>
						<div className="home__widget">
						<div className="home__heading">Create new Person</div>
							<form onSubmit={this.submitEmployee}>
								<label>Employee Name:</label>
								<input type="text" name="name" onChange={this.changeOfEmployeeForm} value={this.state.employeeToAdd.name}/>
								<br/>
								<label>Address:</label>
								<input type="text" name="address" onChange={this.changeOfEmployeeForm} value={this.state.employeeToAdd.address}/>
								<br/>
								<label>Choose Employer</label>
								<select name="employerIndex" onChange={this.changeOfEmployeeForm}>{companyFormSelect}</select>
								<br/>
								<button type="submit">Add Employee</button>					
							</form>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

HomePage.propTypes = propTypes;
export default HomePage;