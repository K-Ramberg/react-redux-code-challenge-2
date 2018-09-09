import types from './types';
import { createDefaultReducer } from '../../helpers'

const initialState = {
  companies: ['22', '44', 'fake company'],
  companyToAdd: {name: 'i am a place holder'}
};

const addCompanyToDirectory = (state, payload) => {
  const companies = [...state.companies]
   companies.push(state.companyToAdd)
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

const actionMap = {
  [types.ADD_COMPANY]: addCompanyToDirectory,
  [types.DELETE_COMPANY]: removeCompanyFromDirectory,
  [types.CLEAR_DIRECTORY]: clearAllFromDirectory
};

export default createDefaultReducer(actionMap, initialState)