var todaysDate = document.getElementById("currentDay");
var editText = document.getElementById("editText");
var hourlyCheck = [
    {
        hour1: "8am",
        hour2: "9am",
        hour3: "10am",
        hour4: "11am",
        hour5: "12pm",
        hour6: "1pm",
        hour7: "2pm",
        hour8: "3pm",
        hour9: "4pm"
    }
];

// Today's date displayed on the top of the site
$(function() {
    moment().format("[Today is] dddd, MMMM Do YYYY");
    todaysDate.append(moment().format("[Today is] dddd, MMMM Do YYYY"));
});

// Check function of past, present and future
$(function() {
    var hourlyTasks = moment.utc();
    // Past check
    for (i = 0; 0 < hourlyCheck.length; i++) {
        if (hourlyCheck[i] > hourlyTasks) {
            $(textarea).css("background-color", "gray")
        };
     break;
    }
});

$(function(saveTasks) {

})