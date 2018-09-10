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

export default {
  addCompany,
  deleteCompany,
  clearDirectory
};