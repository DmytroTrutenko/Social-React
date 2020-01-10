import React from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {

  return {
    sidebar: state.sidebar
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
  }
}

// отрисовываем презент компоненту с переданными ей данными
const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;  