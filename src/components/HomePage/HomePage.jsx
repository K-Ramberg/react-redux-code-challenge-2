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
		this.changeOfCompanyForm = this.changeOfCompanyForm.bind(this)
		this.submitCompany = this.submitCompany.bind(this)
		this.changeOfEmployeeForm = this.changeOfEmployeeForm.bind(this)
		this.submitEmployee = this.submitEmployee.bind(this)
	}	

	changeOfCompanyForm(event) {
		const inputName = event.target.name
        const formInput = event.target.value
        const newState = {...this.state}
        newState.companyToAdd[inputName] = formInput
        this.setState(newState)
    }

	submitCompany(event) {
		const newComp = {...this.state.companyToAdd}
		event.preventDefault()
		 this.props.addCompany(newComp)
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
		const newEmployee = {...this.state.employeeToAdd}
		event.preventDefault()
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
					<div className="company__type">Address:</div>
					<div className="company__info">{each.address}</div>
					<div className="company__type">Revenue:</div>
					<div className="company__info">{each.revenue}</div>
					<div className="company__type">Phone:</div>
					<div className="company__info">{each.phoneNumber}</div>
					<div className="company__end company__bottom"><Link className="link" to={`/${i}`}>Company Overview</Link></div>
				</div>
			)
		})

		const companiesClearOut = () => {
			return(
					<div>
						{companyDirectory}
						<button onClick={deleteCompany}>
							Undo Previous Company
						</button>
						<br/>
						<button onClick={clearDirectory}>
							Clear Directory
						</button>
					</div>
				)
			}

		const companySelect = this.props.companies.map((each,i)=>{
			return (
				<option key={i} value={i}>{each.name}</option>
			)
		})	

		const personCreator = () => {
			return (
				<div className="home__widget">
						<div className="home__heading">Create new Person</div>
							<form className="form__wrapper" onSubmit={this.submitEmployee}>
								<label>Name:</label>
								<input type="text" name="name" onChange={this.changeOfEmployeeForm} value={this.state.employeeToAdd.name}/>
								<br/>
								<label>Address:</label>
								<input type="text" name="address" onChange={this.changeOfEmployeeForm} value={this.state.employeeToAdd.address}/>
								<br/>
								<label>Select Employer</label>
								<select className="form__dropdown" name="employerIndex" onChange={this.changeOfEmployeeForm}>{companySelect}</select>
								<br/>
								<button type="submit">Save</button>					
							</form>
						</div>
			)
		}

		const companyCheck = this.props.companies.length > 0 ? companiesClearOut() : "There are currently no companies to review"

		const employeeHider = this.props.companies.length > 0 ? personCreator() : null

		return (
			<React.Fragment>
				<div className="home__wrapper">
					<div className="home__widget home__main">
						<div className="home__heading">Companies</div>
						{companyCheck}
					</div>
					<div className="home__side">
						<div className="home__widget">
							<div className="home__heading">Create new Company</div>
							<form className="form__wrapper" onSubmit={this.submitCompany}>
								<label>Name:</label>
								<input type="text" name="name" onChange={this.changeOfCompanyForm} value={this.state.companyToAdd.name}/>
								<br/>
								<label>Address:</label>
								<input type="text" name="address" onChange={this.changeOfCompanyForm} value={this.state.companyToAdd.address}/>
								<br/>
								<label>Revenue:</label>
								<input type="number" name="revenue" onChange={this.changeOfCompanyForm} value={this.state.companyToAdd.revenue}/>
								<br/>
								<label>Phone: </label>
								<input type="text" name="phoneNumber" onChange={this.changeOfCompanyForm} value={this.state.companyToAdd.phoneNumber}/>	
								<br/>
								<button type="submit">Save</button>					
							</form>
						</div>
						{employeeHider}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

HomePage.propTypes = propTypes;
export default HomePage;