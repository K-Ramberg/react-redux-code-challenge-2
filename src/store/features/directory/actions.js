import types from './types';

function addCompany(payload) {
  return {
    type: types.ADD_COMPANY,
    payload
  }
}

function deleteCompany() {
  return {
    type: types.DELETE_COMPANY
  }
}

function clearDirectory() {
    return {
      type: types.CLEAR_DIRECTORY
    }
  }

function addEmployee(payload) {
  return {
    type: types.ADD_EMPLOYEE,
    payload
  }
}

export default {
  addCompany,
  deleteCompany,
  clearDirectory,
  addEmployee
};