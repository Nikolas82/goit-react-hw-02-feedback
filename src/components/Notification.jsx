import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const Notification = ({ message }) => (
  <div>
    <h2 className={css.text}>{message}</h2>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
