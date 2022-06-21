var displayTime = document.querySelector("#currentDay");

var currentTime = moment();

displayTime.textContent = currentTime.format("dddd, MMMM Do YYYY, h:mm:ss a")
var m = moment();

    $("#hour8 .text").val(localStorage.getItem("hour8"));
    $("#hour9 .text").val(localStorage.getItem("hour9"));
    $("#hour10 .text").val(localStorage.getItem("hour10"));
    $("#hour11 .text").val(localStorage.getItem("hour11"));
    $("#hour12 .text").val(localStorage.getItem("hour12"));
    $("#hour1 .text").val(localStorage.getItem("hour1"));
    $("#hour2 .text").val(localStorage.getItem("hour2"));
    $("#hour3 .text").val(localStorage.getItem("hour3"));
    $("#hour4 .text").val(localStorage.getItem("hour4"));
    $("#hour5 .text").val(localStorage.getItem("hour5"));

    $(".saveBtn").on("click",function() {
        var value = $(this).siblings(".text").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time,value)
    })

    function rowColor() {
        var time = moment().hours();
        $(".time-block").each(function() {
            var currenthr = parseInt($(this).attr("id"));
            if (currenthr > hour) {
                $(this).addClass("future");
            } else if (currenthr === hour) {
                $(this).addClass("present");
            } else {
                $(this).addClass("past");
            }
        })
    };
 


