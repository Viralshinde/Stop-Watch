//  declaring a veriable 
var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;
//to start a stopwatch
function start(){
    timer=true;
    stopwatch();
}
//a code for stop btn
function stop(){
    timer = false;

}
// a code for reset button 
function reset(){
    timer = false;
    hr=0;
    min=0;
    sec=0;
    count=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";
}
// this logic work for starting and making change in all the number 
function stopwatch(){
    if (timer == true){
        count = count + 1;
        //to increase a number count to second
        if(count == 100){
            sec = sec+1;
            count =0;
        }
        //work for min
        if(sec==60){
            min=min+1;
            sec=0;
        }
        //work for hr
        if(min == 60){
            hr=hr+1;
            min = 0;
            sec=0;
        }
        // this is for after 10 there will be on before zero are present 
        var hrString = hr;
        var minString =min;
        var secString = sec;
        var countString = count;
                if(hr<10){
            hrString = "0" + hrString
        }if(min<10){
            minString = "0" + minString
        }
        if(sec<10){
            secString = "0" + secString
        }
        if(count<10){
            countString = "0" + countString
        }
        document.getElementById("hr").innerHTML= hrString;
        document.getElementById("min").innerHTML= minString;
        document.getElementById("sec").innerHTML= secString;
        document.getElementById("count").innerHTML= countString;
        setTimeout( "stopwatch()",10)
    }

}

