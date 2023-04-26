// turn on

const turnOn=()=>{
    let imgObj = document.getElementById("bulb");
    imgObj.setAttribute("src","images/on.jpg");
}

// turn off

const turnOff=()=>{
    let imgObj = document.getElementById("bulb");
    imgObj.setAttribute("src","images/off.png")
}

//toggle

const toggle=()=>{
    let imgObj = document.getElementById("bulb");
    let srcValue = imgObj.getAttribute('src');

    let buttonOb = document.getElementById('onOffBtn');
    let buttontext = buttonOb.innerHTML;


    if(srcValue=='images/off.png'){
        turnOn();
        buttonOb.innerHTML = 'OFF'
    }
    else{
        turnOff();
        buttonOb.innerHTML = 'ON'
    }
}