// setting current time under header
$("#currentDay").append(moment().format("llll"));

// Save content in text are into local Storage
$(function () {
    $("#button9").click(function () {
        var content = $("textarea9").val();
        localStorage.setItem("content9", JSON.stringify(content));
    });
});

$(function () {
    $("#button10").click(function () {
        var content = $("textarea10").val();
        localStorage.setItem("content10", JSON.stringify(content));
    });
});

$(function () {
    $("#button11").click(function () {
        var content = $("textarea11").val();
        localStorage.setItem("content11", JSON.stringify(content));
    });
});

$(function () {
    $("#button12").click(function () {
        var content = $("textarea12").val();
        localStorage.setItem("content12", JSON.stringify(content));
    });
});

$(function () {
    $("#button13").click(function () {
        var content = $("textarea13").val();
        localStorage.setItem("content13", JSON.stringify(content));
    });
});

$(function () {
    $("#button14").click(function () {
        var content = $("textarea14").val();
        localStorage.setItem("content14", JSON.stringify(content));
    });
});
$(function () {
    $("#button15").click(function () {
        var content = $("textarea15").val();
        localStorage.setItem("content15", JSON.stringify(content));
    });
});

$(function () {
    $("#button16").click(function () {
        var content = $("textarea16").val();
        localStorage.setItem("content16", JSON.stringify(content));
    });
});

$(function () {
    $("#button17").click(function () {
        var content = $("textarea17").val();
        localStorage.setItem("content17", JSON.stringify(content));
    });
});

// function to loop over time blocks to see if its past present or future task
function hourCheck() {

    var currentTime = moment().hours();
    // looping over time blocks
    $(".timeblock").each(function() {
        var blockTime = parseInt($(this).toLocaleString("id").split("-")[1]);
    if (blockTime < currentTime){
        $(this).addClass("past");
    } else if (blockTime === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
    } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
    });
}

hourCheck();

// Get Items save from local storage
$(document).ready(function() {
    document.getElementById("textarea9").value = JSON.parse(localStorage.getItem("content9"));
});
$(document).ready(function() {
    document.getElementById("textarea10").value = JSON.parse(localStorage.getItem("content10"));
});
$(document).ready(function() {
    document.getElementById("textarea11").value = JSON.parse(localStorage.getItem("content11"));
});
$(document).ready(function() {
    document.getElementById("textarea12").value = JSON.parse(localStorage.getItem("content12"));
});
$(document).ready(function() {
    document.getElementById("textarea13").value = JSON.parse(localStorage.getItem("content13"));
});
$(document).ready(function() {
    document.getElementById("textarea14").value = JSON.parse(localStorage.getItem("content14"));
});
$(document).ready(function() {
    document.getElementById("textarea15").value = JSON.parse(localStorage.getItem("content15"));
});
$(document).ready(function() {
    document.getElementById("textarea16").value = JSON.parse(localStorage.getItem("content16"));
});
$(document).ready(function() {
    document.getElementById("textarea17").value = JSON.parse(localStorage.getItem("content17"));
});