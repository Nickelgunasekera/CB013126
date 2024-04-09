document.addEventListener('DOMContentLoaded',function(){
console.log("hello this is dash");

// function show(){
//     alert('Do you want to edit the content')
// }

document.querySelector('.close-modal').addEventListener('click',function(){
    console.log("hello world");
    
    window.location.href='edticontent.html';
   // document.querySelector('btn1').classList.add('hidden');



})
 let getitem1=localStorage.getItem('subsdata1');
let passwordlocal=localStorage.getItem('password');
 let para=document.querySelector('.hell');
 let newcon=`${getitem1}`;

 if(passwordlocal==='admin'){
   para.innerHTML+=newcon;
     console.log(newcon)
 }else{
    para.innerHTML+=`You aren't an Admin , Only Admins are allowed to SEE the Newsletter subscriptions`;
 }
console.log("hello wordl");
console.log(getitem1);

// let getitem1=localStorage.getItem('subsdata1');
// console.log(getitem1);

// let username = document.getElementById("#username").value;
// let password = document.querySelector("#password").value;
//  let para=document.querySelector('.hell');

//  para.innerHTML += getitem1;

// if (password=='admin'){
//    para.innerHTML+=getitem1;
//    console.log("para camed")
// }else{
  // para.innerHTML+= `You aren't an Admin , Only Admins are allowed to SEE the Newsletter subscriptions`;
 //}




// document.querySelector('.btn2').classList.remove('hidden');
console.log('hidden removed');



console.log("hello wordl");


});
