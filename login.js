document.addEventListener('DOMContentLoaded',function(){
'use strict';
console.log("hello world");

function store(link, key) {
  fetch(link)
    .then(function (respose) {
      if (!respose) {
        return console.log("error");
      } else {
        return respose.json();
      }
    })
    .then(function (infor) {
      const jsstr = JSON.stringify(infor);

      localStorage.setItem(key, jsstr);
    })
    .catch(function (error) {
      console.log(`error is ${error}`);
    });
}

let index = store("index.json", "index");
let intro = store("introduction.json", "intro");
let depart = store("department.json", "depart");
let animal = store("animal.json", "animal");
let yala = store("yala.json", "yala");
let wilpattuwa = store("wilpattuwa.json", "wilpattuwa");
let srileo = store("srileo.json", "srileo");
let login = store("login.json", "login");

console.log()
//retrive

function getitem(name){
  let log=localStorage.getItem(name);
 let login= JSON.parse(log);
 return login;
}

let logdata = localStorage.getItem("login");
let newlog = JSON.parse(logdata);
let nwe = newlog.users;




 let newarray = [];
 let passwordarry = [];

 for (let i = 0; i < nwe.length; i++) newarray.push(nwe[i].name);

for (let i = 0; i < nwe.length; i++) passwordarry.push(nwe[i].password);
console.log(newarray, passwordarry);

let loginbtn =document.querySelector(".btn1");
let error = document.querySelector(".error-message");



let lb=document.querySelector('.btn1');
//lb.classList.add('.hidden');
let empty=[];
 

let loginformbtn = document
  .querySelector(".btn20")
  .addEventListener("click", function (e) {
    console.log("button  clicked");

    e.preventDefault();

    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    //let loginbtn =document.querySelector("#btn");
    let error = document.querySelector(".error-message");
    console.log(newarray[0]);
    console.log(username, password);

    if (!username && !password) {
      console.log("error point");
      error.textContent = "error, Enter your details";
      // error.textContent='';
    } else if (username == newarray[0] && password == passwordarry[0]) {
      console.log(`${newarray[0]}logged in`);
      let loginpass=localStorage.setItem('password',password);
      window.location.href = "dashboard.html"; 
      
    } else if (username == newarray[1] && password == passwordarry[1]) {
      console.log(`${newarray[1]}logged in`);
      window.location.href = "dashboard.html";
      localStorage.setItem('password',password);
     
      //lb.style.backgroundColor='red';
      


    } else if (username == newarray[2] && password == passwordarry[2]) {
      console.log(`${newarray[2]}logged in`);
      window.location.href = "dashboard.html";
      localStorage.setItem('password',password);
      //lb.classList.add('.hidden');
      lb.style.backgroundColor='red';

    } else if (username === newarray[3] && password === passwordarry[3]) {
      console.log(`${newarray[3]}logged in`);
      window.location.href = "dashboard.html";
      localStorage.setItem('password',password);
     // lb.classList.add('.hidden');
     lb.style.backgroundColor='red';
    } else {
      console.log("wrong credentials");
      error.textContent = "Invalid username or password, Try again";
      //error.textContent='';
    };

    



  });

  


});
