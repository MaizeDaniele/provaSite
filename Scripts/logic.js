$("#day1").click(function(){
    window.open("day1.html", "_self");
});

$("#day2").click(function(){
    window.open("day2.html", "_self");
});

$("#day3").click(function(){
    window.open("day3.html", "_self");
});


$("#day3").hover(function(){
    $("#day3").css("box-shadow", "2px 2px 2px 2px #FFA000, -2px -2px 2px 2px #FFA000");    
}, function(){
    $("#day3").css("box-shadow", "0px 0px #FFA000");
});

$("#day2").hover(function(){
    $("#day2").css("box-shadow", "2px 2px 2px 2px #FFA000, -2px -2px 2px 2px #FFA000");
}, function(){
    $("#day2").css("box-shadow", "0px 0px #FFA000");
});

$("#day1").hover(function(){
    $("#day1").css("box-shadow", "2px 2px 2px 2px #FFA000, -2px -2px 2px 2px #FFA000");
}, function(){
    $("#day1").css("box-shadow", "0px 0px #FFA000");
});
