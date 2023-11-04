import $ from "jquery";
import "./header.css";
import Icon from '../../assets/holberton-logo.jpg'

$(document).ready(()=>{
    
    
    $(header).append($(title).text("Holberton Dashboard"));
    $(header).append($(link).attr({'rel':'icon', 'type':'image/x-icon', 'href':Icon}));
    console.log("Init header");
});
