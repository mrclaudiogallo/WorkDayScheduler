
// Calling Moment.JS to retrieve the Current Date and Time
const m = moment();
const myMomentDiv = document.getElementById("displayMoment")
displayMoment.textContent=m.format("LLLL")


//Vars and Function to design and apply the color according to its time (Past, Present, Future)

var day = new Date();
var hrs = day.getHours();

var inputEls = $(".description");



$(".description").each(function(index, element){
    
    if(parseInt(element.id) === hrs){
        $(this).addClass("present");
        console.log(element.id);
    } else if (parseInt(element.id) < hrs) {
        $(this).addClass("past");
    } else if (parseInt(element.id) > hrs) {
        $(this).addClass("future");
    }

});


//Click event to save input value and set the attribute.

$(".saveBtn").on("click", function() {
    var timeOfDay = $(this).parent().attr("id");
    var textContent = $(this).siblings("input").val().trim();

    localStorage.setItem(timeOfDay, textContent);
    console.log(timeOfDay, textContent);
}) 

//Sends all inputs to localStorage

$("#9AM").children("input").val(localStorage.getItem("9AM"));
$("#10AM").children("input").val(localStorage.getItem("10AM"));
$("#11AM").children("input").val(localStorage.getItem("11AM"));
$("#12PM").children("input").val(localStorage.getItem("12AM"));
$("#1PM").children("input").val(localStorage.getItem("1PM"));
$("#2PM").children("input").val(localStorage.getItem("2PM"));
$("#3PM").children("input").val(localStorage.getItem("3PM"));
$("#4PM").children("input").val(localStorage.getItem("4PM"));
$("#5PM").children("input").val(localStorage.getItem("5PM"));
