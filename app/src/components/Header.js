import React from 'react';
import { connect } from "react-redux"
import '../app.css';
//import { updateRegion } from "../actions"

const Header = (props) => {

  const handleRegionChange = (e) => {
    //console.log(props)
    // props.region = (e.target.value)
    //props.region = Object.assign({}, props, { region: e.target.value });
    console.log(e.target.value)
  }

  return (
    <div className="Header">
        <div className="header-text">
        <h1>Explore The World One Region At A Time</h1>
        <h3>Click Below To Select Region</h3>
        <label>
          Pick a Region
          <select onChange={handleRegionChange}>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </label>
        </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      region: state.region
  };
};


export default connect(mapStateToProps, {})(Header);
