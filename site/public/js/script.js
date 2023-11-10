let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    passarImg();
}, 5000)

function passarImg(){
    count++
    if(count>5){
        count = 1
    }

    document.getElementById("radio" + count).checked = true;
}