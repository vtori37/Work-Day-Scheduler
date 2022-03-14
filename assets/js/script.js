// displays the current day of the week
var currentday = moment().format("dddd, MMMM Do, YYYY"); // 2012-02-29
console.log(currentday);

var currentDayEl = document.getElementById("currentDay");
currentDayEl.textContent = currentday;

//displays current time
var currentTime = moment().format('hh:mm:ss A') // 2012-02-29
console.log(currentTime);

var currentTimeEl = document.getElementById("clock");
currentTimeEl.textContent = "Current Time:  " + currentTime; 

// button to save the input data
var saveBtnArr = document.querySelectorAll(".saveBtn");

//goes through each time slot and allows the button to react (?)
for ( var i = 0; i < saveBtnArr.length; i++ ) {
  saveBtnArr[i].addEventListener("click", function() {

// 'this' is saveBtnArr, so "this.previousElementSibling.value" is referring to textarea in HTML
    var eventInput = this.previousElementSibling.value;
      console.log(eventInput);

// logs the time and event in localStorage
    var event = this.previousElementSibling.previousElementSibling.getAttribute("id");
      console.log(event);
    localStorage.setItem(event, (eventInput));
  });

};

// retrieves and displays the events stored on local storage
document.getElementById("text1").innerHTML = localStorage.getItem("9am");
document.getElementById("text2").innerHTML = localStorage.getItem("10am");
document.getElementById("text3").innerHTML = localStorage.getItem("11am");
document.getElementById("text4").innerHTML = localStorage.getItem("12pm");
document.getElementById("text5").innerHTML = localStorage.getItem("1pm");
document.getElementById("text6").innerHTML = localStorage.getItem("2pm");
document.getElementById("text7").innerHTML = localStorage.getItem("3pm");
document.getElementById("text8").innerHTML = localStorage.getItem("4pm");
document.getElementById("text9").innerHTML = localStorage.getItem("5pm");




 
  $(".time").each( function() {
    var currentHour = moment().format('h') // current
  console.log(currentHour);

    var timeBlock = parseInt($(this).attr("id"));
    console.log(timeBlock)
  //  for events in the future
    if (currentHour < timeBlock ) {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    } //for events in the present
    else if (currentHour == timeBlock) {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    } // for past events
    else {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    }
    });
  
