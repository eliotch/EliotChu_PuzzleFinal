//referencing my U4L0 code 

function displayImage(){
    fetch('https://source.unsplash.com/collection/190727/600x400')
  .then(response => response.blob())
  .then(blob => {
    document.getElementById('reference').src= URL.createObjectURL(blob);
    document.getElementById('puzzle').src= URL.createObjectURL(blob); 
  });
}
function switcher(){
    
    window.location.href="main.html"
    document.getElementById("main.html/main").onload = displayImage()
}
function checkButton(){
    if(document.getElementById('puzzle_selection.html/random1').clicked == true){
        displayCustomImage();
    }else if(document.getElementById('puzzle_selection.html/random2').clicked == true){
        displayImage();
    }
}
function displayCustomImage(){

}

