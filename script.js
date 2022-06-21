var reformatDate = moment("11/3/20", "MM-DD-YY").format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#3a").text(reformatDate);

console.log('back30Days --> ' + back30Days);
$(document).ready(function () {
$(".saveBtn").on("click",function() {
    var value = $(this).siblings(".hour").text();
    var time = $(this).siblings(".text").val();
    localStorage.setItem(value, time);
});

textContent ()
function textContent () {
    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentText = localStorage.getItem(currentHour);
        if(currPlan !== null) {
            $(this).siblings(".text").val(currentText);
}
    });
}
});

$(document).ready(function(){
    $("#swipe-product").click(function(){
            alert("HELLO");
    });
 })