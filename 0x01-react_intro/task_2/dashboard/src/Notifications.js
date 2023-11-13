import React from 'react';
import './Notifications.css';


let d = {display: inline};

 function Notifications(){
    return(
        <div className='notification'>
            <p>
            Here is the list of notifications
            </p>
            <button style = {d}>x</button>
        </div>
    )
};
export default Notifications;