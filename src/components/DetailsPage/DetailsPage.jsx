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
    </div>
  );
}

DetailsPage.propTypes = propTypes
export default DetailsPage;