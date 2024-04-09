"use strict";


if (!localStorage.getItem('yala')) {
  // If not stored, fetch the external JSON file
  fetch('yala.json')
      .then(response => response.json())
      .then(data => {
          // Convert the JSON data to a string
          var jsonString = JSON.stringify(data);

          // Store the JSON string in localStorage
          localStorage.setItem('yala', jsonString);
          window.location.reload();
      })
      .catch(error => {
          console.error('Error fetching JSON:', error);
      });
}

// let index = store("index.json", "index");
// let intro = store("introduction.json", "intro");
// let depart = store("department.json", "depart");
// let animal = store("animal.json", "animal");
 //let yala = store("yala.json", "yala");
// let wilpattuwa = store("wilpattuwa.json", "wilpattuwa");
// let srileo = store("srileo.json", "srileo");
// let login = store("login.json", "login");

//retrive

function getitem(name){
  let log=localStorage.getItem(name);
 let login= JSON.parse(log);
 return login;
}

// let getindex=getitem('index');
// let getintro=getitem('intro');
// let getdepart=getitem('depart');
// let getsrileo=getitem('srileo');
// let getanimals=getitem('animal');
 let getyala=getitem('yala');
// let getwilpattu= getitem('wilpattuwa')


let yala_div =`<section class="seck" id="sec2">
<img class="mainimg" src="${getyala.section_one[0].image}">
 
<p class="p1">${getyala.section_one[1].paragraph_one}</p>
<br>

<p class="p1">${getyala.section_one[2].paragraph_two} </p>
<br>
<p class="p1"> ${getyala.section_one[3].paragraph_three}</p>
<br>
<br><br>
 
</section>
<hr class="hr1">
</div>

<div>
    <section class="seck">
        <h1 class="his"><u>${getyala.section_two[0].heading}</u> </h1>
        <br>
        <img  class="mainimg" src="${getyala.section_two[1].image}">
        <div class="diva">
        <p class="p1">${getyala.section_two[2].paragraph_one}</p>
        <br>
        <p class="p1"> ${getyala.section_two[3].paragraph_two}</p>
        <br>
        
        
        </div>
    </section>
    <br>
    <br>
    <hr class="hr1">
    <section class="seck">
        <h1 class="his"><u>${getyala.section_three[0].heading}</u> </h1>
        <img  class="mainimg" src="${getyala.section_three[1].image}">
            
        <div class="diva">
        
        <p class="p1">${getyala.section_three[2].paragraph_one}</p>
        <br>
        <p class="p1">${getyala.section_three[3].paragraph_two}</p>
        <br>
        <p class="p1">${getyala.section_three[4].paragraph_three}  </p>
        </div>
    </section>
    <br>
    <br>
    <hr class="hr1">
    
    <section class="seck">
        <h1 class="his"><u>${getyala.section_four[0].heading}</u> </h1>
        <img class="mainimg" src="${getyala.section_three[1].image}">
        
           
    
        <div class="diva">
        
        <p class="p1">${getyala.section_four[1].paragraph_one}</p>
        <br>
        <p class="p1">${getyala.section_four[2].paragraph_two}</p>
        <br>
        <p class="p1">${getyala.section_four[3].paragraph_three}</p>
        <br>
        
        </div>
    </section>
    


   
<br>
<footer class="footer">
    <div>
        <p>${getyala.footer[0].paragrpah}</p>
        <!--Reference listTTC Sri Lanka. (2016). Yala National Park. [online] Available at: https://ttcsrilanka.com/sri-lanka/yala-national-park/ [Accessed 14 Jan. 2024].
             (n.d.). Retrieved from expedia.com: https://www.expedia.com/Things-To-Do-In-Yala.d645003002291478528.Travel-Guide-Activities
gteyourguide.co.uk. (n.d.). Retrieved from getyourguide.co.uk: https://www.getyourguide.co.uk/yala-national-park-l97530/from-ella-full-day-yala-national-park-safari-tour-t184109/
Reference listUga Escapes. (n.d.). Yala Sri Lanka | National Parks of Sri Lanka. [online] Available at: https://www.ugaescapes.com/destinations/yala.html.

-->
<button class='newbutton' type="submit"> Click For NewsLetter Subscription</button>
        </div>

</footer>`;

let link_yala = document.querySelector('.yala');
link_yala.innerHTML=yala_div;

let loginbtn =document.querySelector("#yala");
let error = document.querySelector(".error-message");

loginbtn.addEventListener('click',function(){
  console.log("button clicked");
  window.location.href='login.html';
  loginbtn.classList.add('hidden');
})

let newbutton=document.querySelector('.newbutton');

newbutton.addEventListener('click',function(){
  window.location.href='newsletter.html';
})
