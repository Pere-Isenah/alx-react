import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils';
import NotificationItem  from './NotificationItem';
import propTypes from "./Prop-types"


let btnStyle = {
  position: 'absolute',
  top: '1.5em',
  right: '2.5em',
  ariaLabel: 'close',
};

let btnClick = function buttonMsg() {
  console.log('Close button has been clicked');
};

function Notifications({displayDrawer}) {
  return (
    <div className="menuItem">
      Your notifications
    </div>
    { !displayDrawer ? ( return
    (
    <div className='notification'>
      <p>
        Here is the list of notifications
      </p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }}/>
      </ul>
      <button onClick={btnClick} style={btnStyle}>x</button>
    </div>
    ))}
  );
}

Notifications.propTypes={
  displayDrawer: propTypes.bool
}
Notifications.defaultProps={
displayDrawer: false,
}

export default Notifications;
