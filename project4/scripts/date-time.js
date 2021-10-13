function getDayStatus() {
    let date = new Date();
let currentDate = (date.getMonth()+1) + "/" + date.getDay() 
+ "/" + date.getFullYear() + date.getHours() + ":" 
+ date.getMinutes();

let dateFooter = document.getElementById('date-time');

console.log('this prints to the console');

dateFooter.innerHTML = currentDate;

}