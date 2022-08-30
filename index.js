let slideIndex =1;
showslide(slideIndex);

function plus(n){
showslide(slideIndex +=n);
//  console.log(slideIndex+=n);
}
;
// function btm_slide(n){
//   showslide(slideIndex=n);
// }

function showslide(n){
let i;
let slide = document.getElementsByClassName("slides");
if(n > slide.length){slideIndex=1}
if(n < 1){slideIndex=slide.length}
for(i=0;i<slide.length;i++){
  slide[i].style.display="none";
}
slide[slideIndex-1].style.display = "block";
}
// contact
function sendmsg(){
    let Fullnames = document.getElementById("fullname").value;
    let Emailaddress = document.getElementById("emailaddress").value;
    let Messages = document.getElementById("messagebox").value;
      
    if(Fullnames === "" && Emailaddress==="" && Messages ==="")
    {
     alert('Fillout the form');
    
    } 
    else{
     window.location.href='index.html';
     alert(' form'); 
      }
   }
// booking msg
function checkbtn()
{
   alert("Car Booked successfully.");
    window.location.href = "index.html";
}

// login form
function login(){
    document.querySelector('.form-popup').classList.toggle('active');
 }


function closebtn(){
  document.querySelector('.form-popup').classList.remove('active');
}
// signup from
 function signup(){
  
  document.querySelector('.form-signup').classList.toggle('active');
  closebtn();
}
function closesignup(){
  document.querySelector('.form-signup').classList.remove('active');
}

// login validation
const form = document.querySelector("form-popup");

// let menubtn = document.querySelector('#menu-btn');
// let navcon = document.querySelector('.navcon');

//  menubtn.onclick=()=>{
//   menubtn.classList.toggle('fa-times');
//   navcon.classList.toggle('active');
// }


  
