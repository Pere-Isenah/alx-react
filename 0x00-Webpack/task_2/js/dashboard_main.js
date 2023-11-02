import $ from "jquery";
import _ from "lodash";
import "../css/main.css";
import Icon from '../assets/holberton-logo.jpg';

$(document).ready(function(){

    $("body").append("<p>Holberton Dashboard</p>")
    $("body").append("<p>Dashboard data for the students</p>")
    $("body").append("<button>Click here to get started</button>")
    $("body").append("<p id='count'></p>")
    $("body").append("<p>Copyright - Holberton School</p>")

    let clickCount = 0;

    const updateCounter = ()=>{

        $("button").click(()=>{
        clickCount++;
        $("#count").text(`${clickCount} clicks on the button`)
        
    })}
    _.debounce(updateCounter, 500);
    updateCounter()
    const imgElement = $('<img>').attr({'src': Icon, 'id': 'logo'});
    imgElement.insertBefore($("p:first"));
});
