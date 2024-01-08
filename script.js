//referencing my U4L0 code 
displayImage().then(response => {
    console.log("good");
})
.catch(error => {
    console.log("bad");
})


async function displayImage(){
    const response = await fetch('https://source.unsplash.com/collection/190727/600x400');
    const blob = await response.blob();
    document.getElementById('reference').src= URL.createObjectURL(blob);
    document.getElementById('puzzle').src= URL.createObjectURL(blob);  
}  

