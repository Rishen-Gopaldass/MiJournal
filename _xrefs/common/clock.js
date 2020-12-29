function Clock () {
        var d = new Date();
        da = d.toDateString();
        h = d.getHours();
        m = d.getMinutes();
        s = d.getSeconds();
        display = da + "," + " " + h + ":" + m + ":" + s ;
        document.getElementById("IDclock").innerHTML = display;
}
setInterval ( Clock , 1000 ) ;