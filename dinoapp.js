document.addEventListener("keypress",function(event){
    jump(event.key);
    
})
function jump(key)
{   console.log(key);
    if(key==" ")
    {
        document.getElementById("dino_img").classList.add('jump');
    }
    setTimeout(unjump,500);
}
function unjump()
{
    document.getElementById("dino_img").classList.remove ('jump');
}