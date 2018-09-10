import types from './types';
import { createDefaultReducer } from '../../helpers'

const initialState = {
  companies: [{
    name: 'i am a place holder',
    address: 'this is where its at',
    revenue: 100000,
    phoneNumber: 4048675309,
    employees: [{name: "dave tester", address: "i live there", employerIndex: 0}]  
  }]
};

const addCompanyToDirectory = (state, payload) => {
  const companies = [...state.companies]
   companies.push(payload)
  return {
    ...state,
    companies
  }
};

const removeCompanyFromDirectory = (state, payload) => {
  const companies = state.companies.slice(0, state.companies.length-1)
  return {
    ...state,
    companies
  }
};

const clearAllFromDirectory = (state, payload) => {
  return {
    ...state,
    companies: []
  }
}

const addEmployeeToCompany = (state, payload) => {
  const companies = [...state.companies]
    companies[payload.employerIndex].employees.push(payload)
  return {
    ...state,
    companies
  }
}

const actionMap = {
  [types.ADD_COMPANY]: addCompanyToDirectory,
  [types.DELETE_COMPANY]: removeCompanyFromDirectory,
  [types.CLEAR_DIRECTORY]: clearAllFromDirectory,
  [types.ADD_EMPLOYEE]: addEmployeeToCompany
};

export default createDefaultReducer(actionMap, initialState)