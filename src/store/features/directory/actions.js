import types from './types';

function addCompany() {
  return {
    type: types.ADD_COMPANY
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