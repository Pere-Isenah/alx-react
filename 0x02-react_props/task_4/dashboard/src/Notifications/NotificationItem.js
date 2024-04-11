import React from 'react';
import PropTypes from "./Props-type";


function NotificationItem({ type, html, value }) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}>
      {value}
    </li>
  );
}
NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  })
};
export default NotificationItem;
