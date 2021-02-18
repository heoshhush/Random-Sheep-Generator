const nameText = document.querySelector('.sheepName');


function genRandomNum(){
    const randomNum = Math.floor(Math.random()*10);
    return randomNum;
    
}

function namingSheep(numResult){
    temp = ['Charlie', 'John', 'Susan', 'Michael', 'Steve', 'Nicolas', 'Ellie', 'Bush', 'Clinton', 'Jason']
    const SheepName =  temp[numResult]
    nameText.innerText = SheepName;
    
    }


function init(){
    const numResult = genRandomNum();
    namingSheep(numResult);
}



init();