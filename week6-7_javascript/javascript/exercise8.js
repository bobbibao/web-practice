function clock(){
    var d = new Date();

    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    var date = d.getDate();
    var day = d.getDay();
    var month = d.getMonth();
    var year = d.getFullYear();
    var days = new Array("Chu Nhat", "Thu hai", "Thu ba", "Thu tu", "Thu nam", "Thu sau", "Thu bay");
    var months = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12");
    var am_pm;

    if(s < 10){
        s = "0" + s;
    }
    if(m < 10){
        m = "0" + m;
    }
    if(h > 12){
        h -= 12;
        am_pm = "PM";
    }
    else{
        am_pm = "AM";
    }
    if(h < 10){
        h = "0" + h;
    }
    document.getElementById("clock").innerHTML = days[day] + " Ngay "
    + date + "/" + months[month] + "/" + year + " Bay gio la " + " [" + h + ":" + m + ":" + s + "] " + am_pm;
    setTimeout("clock()", 1000)
}
clock()