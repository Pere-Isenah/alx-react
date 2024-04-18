import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils';
import NotificationItem from './NotificationItem';
import PropTypes from "prop-types";

class Notifications extends Component(
  const markAsRead=(id)=>{
    console.log(`Notification ${id} has been marked as read`)
  }
  { displayDrawer, listNotifications }) {
  let btnClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="notification-con">
      <div className="menuItem">
        Your notifications
      </div>
      {!displayDrawer && (
        <div className='notification'>
          <p>
            Here is the list of notifications
          </p>
          <ul>
            {listNotifications.length === 0 ? (
              <li>No new notification for now</li>
            ) : (
              listNotifications.map((notification, index) => (
                <NotificationItem
                  key={index}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead ={markAsRead}
                  onClick ={markAsRead(index)
                />
              ))
            )}
          </ul>
          <button onClick={btnClick} className="btnStyle">x</button>
        </div>
      )}
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      html: PropTypes.object
    })
  )
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

export default Notifications;
