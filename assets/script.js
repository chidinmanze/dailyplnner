
$(document).ready(function(){
    
    // Set date and time info at the top of the calendar
    var now = moment();
    console.log(now.toString());
    console.log(now.format("dddd MMMM Do YYYY"));
    $("#currentDay").html(now.format("dddd MMMM Do YYYY h:m a"));

    // 

    // Save time and information typed in calendar line into local storage 
    $(".saveBtn").on("click", function(event) {
        event.preventDefault();
        let textIn = $(this).siblings(".input").val();
        let time = $(this).parent().attr("id");
        console.log(textIn)
        console.log(time)
        console.log(this);
        console.log(event);
        localStorage.setItem("textIn", textIn);
        localStorage.setItem("time", time);

        
    });
    

    // Set past, present, and future color based on timeblock
    // let time = $(this).parent().attr("id");
    // function 
    // var timeCLass = $(this).parent().attr("id");
    // function timeClass()


  


});
    

