$(function() {
    var div = document.getElementById("showtime");
    loop = setInterval (function () {
        div.innerHTML = showtime();
    }, 500); 
});


function showtime () {
    var nowtime = new Date(), 
        endtime = new Date("2022/1/1");  
    var lefttime = endtime.getTime() - nowtime.getTime(), 
        leftd = Math.floor(lefttime/(1000*60*60*24)),  
        lefth = Math.floor(lefttime/(1000*60*60)%24),  
        leftm = Math.floor(lefttime/(1000*60)%60), 
        lefts = Math.floor(lefttime/1000%60);
        if (lefts == 0){
            clearInterval(loop);
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            fireworks();
        }
            
    return leftd + "天" + lefth + ":" + leftm + ":" + lefts;  
}



function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}