import React from 'react';
import './Notifications.css';
import {getLatestNotification} from './utils'



let btnStyle = {position: 'absolute',
         top : '1.5em',
        right : '2.5em',
        ariaLabel: 'close',
        };
let btnClick = function buttonMsg(){
    console.log("Close button has been clicked")
 }
 function Notifications(){
    return(
        <div className='notification'>
            <p>
            Here is the list of notifications
            </p>
            <ul>
                <li data-priority= 'default'>New course available</li>
                <li data-priority= 'urgent'>New resume available</li>
                <li  data-priority= 'urgent' dangerouslySetInnerHTML={{__html:getLatestNotification()}}/>
            </ul>
            <button onClick={btnClick} style = {btnStyle}>x</button>
        </div>
    )
};




export default Notifications;