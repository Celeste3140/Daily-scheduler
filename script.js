var reformatDate = moment("11/3/20", "MM-DD-YY").format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#3a").text(reformatDate);

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

    function rowColor () {
        var hour = moment().hours();
        $(".time-block").each(function() {
            var currHour = parseInt($(this).attr("id"));
    
            // console.log(this); //each time-block
    
            if (currHour > hour) {
                $(this).addClass("future");
            } else if (currHour === hour) {
                $(this).addClass("present");
            } else {
                $(this).addClass("past");
            }
        })
    };