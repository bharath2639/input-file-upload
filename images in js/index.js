let userInput = document.getElementById("userinput");

let userUpload = document.getElementById("upload");

let imgdisplay = document.getElementById("images");

let userInput2 = document.getElementById("header");


userUpload.onchange = (path) =>{
    let object = path.target.files[0]
    let pathImg = URL.createObjectURL(object);

    imgdisplay.src = pathImg;
    userInput2.innerHTML=userInput.value ;


}