import React, { Children } from 'react'
import PropTypes from "prop-types";
const Button = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "medium",
  disabled = false,
  ...props
}) => {
  return (
   <button
   className={`custom-btn ${variant} ${size} ${className}`}
   onClick={onClick}
   disabled={disabled}
   {...props}
   >
    {children}
   </button>
  )
};

// Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func,
//   className: PropTypes.string, 
//   variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
//   size: PropTypes.oneOf(["small", "medium", "large"]), 
//   disabled: PropTypes.bool, 
// };

export default Button
