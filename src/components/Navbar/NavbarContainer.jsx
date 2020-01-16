import React from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { compose } from 'redux';

let mapStateToProps = (state) => {

  return {
    sidebar: state.sidebar
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Navbar); 