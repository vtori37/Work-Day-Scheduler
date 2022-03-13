// displays the current day of the week
var currentday = moment().format("MMMM Do, YYYY"); // 2012-02-29
console.log(currentday);

var currentDayEl = document.getElementById("currentDay");
currentDayEl.textContent = currentday;

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
    localStorage.setItem(event, eventInput);

  });
};






/*


  var eventInput = document.querySelectorAll(".inputTxt");
  for ( var i = 0; i < eventInput.length; i++ ) {

      eventInput[i] = document.getElementById("this.previousElementSibling.value");

var eventInput = JSON.parse(localStorage.getItem("tasks"));
    // var eventInput = document.querySelectorAll(".inputTxt"); 
    // localStorage.setItem("eventInput", "this.previousElementSibling.value")
   
  
   // var input = document.getElementsByClassName("").previousElementSibling.value.innerHtml;
// var inputTxtVal = document.querySelectorAll(".inputTxt");
// for (var i = 0; i < inputTxtVal.length; i++) {
//   // inputTxtVal[i].addEventListener("click" functio() {




  

- store time slot as a key
- store the input value as the value of the key 
? get specific hour of the day using moment.js
use if statements comparing chosen time when color-coding time

// make sure to type stuff out yourself



















// / document.querySelectorAll(".saveBtn").addEventListener("click", function(){
  //   // var inputValue = document.querySelector(".inputTxt").value;
  //   // localStorage.setItem("Saved9amKey", "9am")
  //   // console.log(inputValue);
  //   /* "this" is "localStorage.setItem". The sibling of "This" is var inputValue. 
  //   Therefore, inputValue is being console logged*/
  //   console.log(this);
  //   // console.log(this.previousElementSibling.value);
  

// Same thing as line 4 and 5: document.getElementById("currentDay").textContent="Hi There";

// same as line 9 and tom document.getElementsByClassName("inputTxt")
// console.log(document.getElementsByClassName("inputTxt"));