function timeCall(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(timeCall, 1000);
