import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils';
import NotificationItem  from './NotificationItem';
import PropTypes from "prop-types";




let btnClick = function buttonMsg() {
  console.log('Close button has been clicked');
};

function Notifications({displayDrawer}) {
  console.log(displayDrawer);
  return (
    <>
    <div className="notification-con">
    <div className="menuItem">
      Your notifications
    </div>
    { !displayDrawer && ( 
    <div className='notification'>
      <p>
        Here is the list of notifications
      </p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }}/>
      </ul>
      <button onClick={btnClick} className="btnStyle">x</button>
    </div> )}
    </div>
   </>
   );}

Notifications.propTypes={
  displayDrawer: PropTypes.bool
}
Notifications.defaultProps={
displayDrawer: false,
}

export default Notifications;
