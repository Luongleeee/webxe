var imge = document.getElementById("picture");

var img = [
    "anh2.jpg",
    "anh3.jpg",
    "anh4.jpg",
    "anh5.jpg",
];

var number = document.getElementById("number");

var numbers = [
    "1", "2", "3", "4", "5",
];

var folder_img = "images/";

var len = img.length;

var index = 0;

function next(){
    if(index == len - 1){
        index=0;
        imge.src = folder_img + img[index];
        number.innerHTML = numbers[index];
    }else{
        index++;
        imge.src = folder_img + img[index];
        number.innerHTML = numbers[index];
    }
}

function prev(){
    if(index==0){
        index = len - 1;
        imge.src = folder_img + img[index];
        number.innerHTML = numbers[index];
    }else{
        index--;
        imge.src = folder_img + img[index];
        number.innerHTML = numbers[index];
    }
}

var t = null;

var flag = 0;

function start(){
    if(flag == 0){
        t = setInterval(function(){
            next();
        }, 2000);
        flag = 0;
    }
}

function stop(){
    clearInterval(t);
    flag = 0;
}
start();