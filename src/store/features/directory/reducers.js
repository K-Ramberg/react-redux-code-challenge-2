import types from './types';
import { createDefaultReducer } from '../../helpers'

const initialState = {
  companies: [],
  companyToAdd: {}
};

const addCompanyToDirectory = (state, payload) => {
  const companies = state.companies.push(state.companyToAdd)
  return {
    ...state,
    companies
  }
};

const removeCompanyFromDirectory = (state, payload) => {
  const companies = state.companies.pop()
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