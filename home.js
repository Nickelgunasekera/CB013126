
"use strict";


if (!localStorage.getItem('intro')) {
  // If not stored, fetch the external JSON file
  fetch('introduction.json')
      .then(response => response.json())
      .then(data => {
          // Convert the JSON data to a string
          var jsonString = JSON.stringify(data);

          // Store the JSON string in localStorage
          localStorage.setItem('intro', jsonString);
          window.location.reload();
      })
      .catch(error => {
          console.error('Error fetching JSON:', error);
      });
}

//let index = store("index.json", "index");
//let intro = store("introduction.json", "intro");

function getitem(name){
    let log=localStorage.getItem(name);
   let login= JSON.parse(log);
   return login;
  }
  
  //let getindex=getitem('index');
  let getintro=getitem('intro');

let intro_div=` <section class="${getintro.body.section.class}" id="${getintro.body.section.id}">

<h2 class="${getintro.body.section.h2class}" >${getintro.body.section.heading}</h2>
<img class="${getintro.body.section.imageclass}" src="${getintro.body.section.image}">

<p class="${getintro.body.section.paragraphclass}"> ${getintro.body.section.paragraph} </p>
<p class="${getintro.body.section.paragraphclass}">${getintro.body.section.paragraph1}</p>


<br>
<iframe class="${getintro.body.section.iclass}" src="${getintro.body.section.iframe}"></iframe>
<br>
</section>
<hr class="hrd">



<section class="sec2">

    <h2 class="${getintro.body.section.h2class}">${getintro.body.section1.heading}</h2>
    <img class="${getintro.body.section.imageclass}" src="${getintro.body.section1.image}" alt="udawalawe national park">
    
    <p class="${getintro.body.section.paragraphclass}">${getintro.body.section1.paragraph}</p>
    
    <p class="${getintro.body.section.paragraphclass}">${getintro.body.section1.paragraph1}</p>

    
    <br>
    <iframe class ="${getintro.body.section.iclass}" src="${getintro.body.section1.iframe}"></iframe>
    </section>
    
    <hr class="hrd">
    <br>
    <section class="sec2" id="pinnawala">

        <h2 class="${getintro.body.section.h2class}">${getintro.body.section2.heading}</h2>
        <img class="${getintro.body.section.imageclass}" src="${getintro.body.section2.image}">
       
          <br>
        <p class="${getintro.body.section.paragraphclass}">${getintro.body.section2.paragraph}</p>
        <p class="${getintro.body.section.paragraphclass}"> ${getintro.body.section2.paragraph1}</p>
        <p class="${getintro.body.section.paragraphclass}"> ${getintro.body.section2.paragraph2}</p>
        
                      <iframe class="${getintro.body.section.iclass}" src="${getintro.body.section2.iframe}"></iframe>
        </section>
        <br>
        <br>
        <hr class="hrd">

        <section class="sec2">

            <h2 class="${getintro.body.section.h2class}">${getintro.body.section3.heading}</h2>
            <img class="${getintro.body.section.imageclass}" src="${getintro.body.section3.image}" alt="Udawattekele">
            
            
            <p class="${getintro.body.section.paragraphclass}">${getintro.body.section3.paragraph}</p>
             <p class="${getintro.body.section.paragraphclass}">${getintro.body.section3.paragraph1}</p>
                
            
         <iframe class="${getintro.body.section.iclass}" src="${getintro.body.section3.iframe}"></iframe>
                     
           
            </section>
            <br>
            <hr class="hrd">
            <section class="sec2">

                <h2 class="${getintro.body.section.h2class}">${getintro.body.section4.heading}  </h2>
                <img class="${getintro.body.section.imageclass}" src="${getintro.body.section4.image}" alt="udawalawe national park">
                
                <p class="${getintro.body.section.paragraphclass}">${getintro.body.section4.paragraph} </p>
                <p class="${getintro.body.section.paragraphclass}">${getintro.body.section4.paragraph1}</p>
                <br>
                
        
                <iframe class="${getintro.body.section.iclass}" src="${getintro.body.section4.iframe}"></iframe>
                
                </section>`;
let link_intro= document.querySelector('.intro');

link_intro.innerHTML=intro_div;

let loginbtn =document.querySelector("#intro");
let error = document.querySelector(".error-message");

loginbtn.addEventListener('click',function(e){
  e.preventDefault();
  console.log("button clicked");
  window.location.href='login.html';

})

let newbutton=document.querySelector('.newbutton');

newbutton.addEventListener('click',function(){
  window.location.href='newsletter.html';
})
