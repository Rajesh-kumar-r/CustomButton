import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './CustomButton.scss';

const CustomButton = ({ 
  label, 
  onClick, 
  type = 'button', 
  disabled = false, 
  variant = 'primary', 
  size = 'medium', 
  icon, 
  fullWidth = false 
}) => {
  const buttonClass = classNames(
    'custom-button',
    `custom-button--${variant}`,
    `custom-button--${size}`,
    { 'custom-button--full-width': fullWidth }
  );

  return (
    <button 
      type={type} 
      className={buttonClass} 
      onClick={onClick} 
      disabled={disabled}
    >
      {icon && <span className="custom-button__icon">{icon}</span>}
      {label && <span className="custom-button__label">{label}</span>}
    </button>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.node,
  fullWidth: PropTypes.bool
};

export default CustomButton;
