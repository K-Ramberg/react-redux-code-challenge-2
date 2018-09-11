import React from 'react';
import PropTypes from 'prop-types';
import './styles.less'

const propTypes = {
  companies: PropTypes.array.isRequired
};

function DetailsPage(props) {
  const rightID = Number(props.match.params.id)
  const thisCompany = props.companies[rightID]
  const employees = thisCompany.employees.map((each, i) => {
    return (
      <div className="company__card" key={i}>
        <div className="company__end company__top company__top_small">{each.name}</div>
        <div className="company__indent">
          <div className="company__type"> Address:</div>
          <div classname="company__info">{each.address}</div>
        </div> 
        <div className="company__bottom"></div>
      </div>
    )
  })
  return (
    <div className="home__mid">
      <div className="company__card">
        <div className="company__end company__top">Profile Overview</div>
          <div className="company__stagger">
            <div>
              <div className="company__type"> Address:</div>
              <div classname="company__info">{thisCompany.address}</div>
              <div className="company__type">Revenue:</div>
              <div className="company__info">{thisCompany.revenue}</div>
              <div className="company__type">Phone:</div>
              <div className="company__info">{thisCompany.phoneNumber}</div>
            </div>
            <div>
              <div className="company__type">Total Employees: </div>
              <div className="company__info">{thisCompany.employees.length}</div>
            </div>
          </div>
        <div className="company__bottom"></div>
      </div>
      <div className="company__card">
      <div className="company__end company__top company__top_plus">Employees</div>
        {employees}
      </div>
    </div>
  );
}

DetailsPage.propTypes = propTypes
export default DetailsPage;