const body = document.querySelector('body');


function paintSheep(numResult){
    image = new Image();
    image.src = `images/${numResult+1}.jpg`;
    image.classList.add('imgCss');
    body.appendChild(image);
}



function genRandomNum(){
    const randomNum = Math.floor(Math.random()*10);
    return randomNum;
    
}


function init(){
    const numResult = genRandomNum();
    paintSheep(numResult);
}

init();