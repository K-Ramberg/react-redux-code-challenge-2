import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	companies: PropTypes.array.isRequired
};

function DetailsPage({ companies }) {
  const companiesSpread = companies.map((each, i)=>{
    return( <div key={i}>woot</div>)
  })

  return (
    <div>Code for the Details Page goes here
      {companiesSpread}
    </div>
  );
}

DetailsPage.propTypes = propTypes
export default DetailsPage;