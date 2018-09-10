import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	companies: PropTypes.array.isRequired
};

function DetailsPage(props) {
   const rightID = Number(props.match.params.id)
   const thisCompany = props.companies[rightID]
   console.log(thisCompany)
  return (
    <div>Code for the Details Page goes here
      <h1>{thisCompany.name}</h1>
      <h4> Address:</h4>
      <div>{thisCompany.address}</div>
      <h4>Revenue:</h4>
      <div>{thisCompany.revenue}</div>
      <h4>Phone:</h4>
      <div>{thisCompany.phoneNumber}</div>
      <h4>Total Employees: </h4>
      <div>{thisCompany.employees.length}</div>
    </div>
  );
}

DetailsPage.propTypes = propTypes
export default DetailsPage;