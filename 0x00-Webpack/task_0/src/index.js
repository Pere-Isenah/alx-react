import $ from "jquery";
$(document).ready(function(){
    const contents= ["Holberton Dashboard","Dashboard data for the students","Copyright - Holberton School"];
    contents.forEach(content => {
        const paragraph = $("<p>").text(content);
        $("body").append(paragraph);
        });
})

