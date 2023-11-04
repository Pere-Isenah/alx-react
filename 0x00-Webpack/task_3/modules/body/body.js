import $ from "jquery";
import _ from "lodash";
import "./body.css";


$(document).ready(function(){

    $("body").append("<button>Click here to get started</button>")
    $("body").append("<p id='count'></p>")

    let clickCount = 0;

    const updateCounter = ()=>{

        $("button").click(()=>{
        clickCount++;
        $("#count").text(`${clickCount} clicks on the button`)
        
    })}
    _.debounce(updateCounter, 500);
    updateCounter()
});
