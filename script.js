var currentDate = moment().format("dddd, MMMM DD YYYY");
$("#currentDay").text(currentDate);

$(document).ready(function () {

    function insertData() {
        var hourPick = moment().format('H');
        console.log(hourPick);

        var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

        for (var i = 0; i < workHours.length; i++) {

            var timeEl = workHours[i];
            console.log(timeEl);
            var presentTime = parseInt(hourPick);
            console.log(presentTime);

            $("#" + hourPick + "t").addClass("present")
            if (hourPick < timeEl) {
                $("#" + workHours[i] + "t").addClass("future")
            } else if (hourPick > timeEl) {
                $("#" + workHours[i] + "t").addClass("past")
            }
        }
    }

    insertData();

    $(".saveBtn").on("click", function () {
        event.preventDefault();
        var hourEl = $(this).siblings(".hour").attr("id")
        var schedule = $(this).prev().val();
        localStorage.setItem(hourEl, schedule);


    })

    function retrieveData() {

        $("#9t").text(localStorage.getItem("9AM"));
        $("#10t").text(localStorage.getItem("10AM"));
        $("#11t").text(localStorage.getItem("11AM"));
        $("#12t").text(localStorage.getItem("12PM"));
        $("#13t").text(localStorage.getItem("1PM"));
        $("#14t").text(localStorage.getItem("2PM"));
        $("#15t").text(localStorage.getItem("3PM"));
        $("#16t").text(localStorage.getItem("4PM"));
        $("#17t").text(localStorage.getItem("5PM"));
    }

    retrieveData();



})
