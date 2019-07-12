/* eslint-disable react/button-has-type */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import { ActionCreators as ErrorActions } from '../../store/ducks/error';
import CloseIcon from '../../assets/images/close.svg';

import { Container } from './ErrorBoxStyle';

const ErrorBox = ({ error: { message, visible }, hideError }) => visible && (
<Container>
  <p>{message}</p>
  <button onClick={hideError}>
    <img src={CloseIcon} alt="Fechar" />
  </button>
</Container>
);

ErrorBox.propTypes = PropTypes.shape({
  error: PropTypes.shape({
    message: PropTypes.string,
    visible: PropTypes.bool,
  }).isRequired,
  hideError: PropTypes.func.isRequired,
});

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(ErrorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorBox);
