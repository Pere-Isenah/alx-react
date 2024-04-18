import PropTypes from "prop-types";
import React from 'react';

export function NotificationItemShape(){

}


NotificationItemShape.propTypes = {
    id: PropTypes.number.isRequired,
    __html: PropTypes.shape({
        html: PropTypes.string,
      }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
  };