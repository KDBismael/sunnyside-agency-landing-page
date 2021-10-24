//get body element
var body =document.getElementsByTagName('body')[0];
//get burger element
var burger=document.getElementsByClassName('burger')[0];
//get modal element
var modal=document.getElementsByClassName('modal')[0];
//get modal content element
var modalContent=document.getElementsByClassName('modalcontent')[0];
//get arrow element
var arrow=document.getElementsByClassName('arrow')[0];
//get logo
var logo=document.getElementsByClassName('logo')[0];

//listen click on burger
burger.addEventListener('click',displayNav);
//close nav outside click
modal.addEventListener('click',(e)=>{
    if(e.target==modalContent){
        modal.style.display="none"
        body.style.overflowY="auto"
    }
})

//function to display nav
function displayNav(){
    modal.style.display="block"
    body.style.overflow="hidden"
}
