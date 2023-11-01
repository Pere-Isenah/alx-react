import $ from "jquery";
import _ from "lodash";



$(document).ready(function(){
    $("body").append("<p>Holberton Dashboard</p>")
    $("body").append("<p>Dashboard data for the students</p>")
    $("body").append("<button>Click here to get started</button>")
    $("body").append("<p id='count'></p>")
    $("body").append("<p>Copyright - Holberton School</p>")

    let clickCount = 0;

    $.fn.updateCounter = _.debounce(function(){

       this.click(function(){
        clickCount++;
        $("#count").text(clickCount)
        
    })},2000)
    $("button").updateCounter()
})
