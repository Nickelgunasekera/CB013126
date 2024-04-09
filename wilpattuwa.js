"use strict";


if (!localStorage.getItem('wilpattuwa')) {
  // If not stored, fetch the external JSON file
  fetch('wilpattuwa.json')
      .then(response => response.json())
      .then(data => {
          // Convert the JSON data to a string
          var jsonString = JSON.stringify(data);

          // Store the JSON string in localStorage
          localStorage.setItem('wilpattuwa', jsonString);
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
// let yala = store("yala.json", "yala");
 //let wilpattuwa = store("wilpattuwa.json", "wilpattuwa");
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
// let getyala=getitem('yala');
let getwilpattu= getitem('wilpattuwa')

let wilpattuwa_div=`       <div>
<section class="sec1" id="sec1">
<img class="mainimg1" src="${getwilpattu.section_one[0].image}">
 
<p class="p8">${getwilpattu.section_one[1].paragraph_one}</p>
<br>

<p class="p8">${getwilpattu.section_one[2].paragraph_two} </p>
<br>
<p class="p8"> ${getwilpattu.section_one[3].paragraph_three}</p>
<br>
<br><br>
 
</section>
<hr class="hr1">
</div>

<div>
<section class="sec1" >
    <h1 class="his"><u>${getwilpattu.section_two[0].heading}</u> </h1>
    <img  class="mainimg2" src="${getwilpattu.section_two[1].image}">
    
    <p class="p8">${getwilpattu.section_two[2].paragrpah_one}</p>
    <br>
    <p class="p8">${getwilpattu.section_two[3].paragraph_two}</p>
    <br>
    <p class="p8">${getwilpattu.section_two[4].papagrpah_three} </p>
</section>
<br>
<hr class="hr1">
<section class="sec1">
    <h1 class="his"><u>GUIDE TO WILPATTU</u> </h1>
    <img class="mainimg1" src="images/sri-lanka-yala-np-gamedrive.jpeg">
      
    

    
    <p class="p8">The full extent of Wilpattu National Park is open to visitors, and this is eight times larger than Yala National Park’s Block I, which is where most of Yala’s game drives take place. As such, the chances of encountering masses of jeeps are much less likely</p>
    <br>
    <p class="p8"> You need a little more time to explore Wilpattu – reaching the main, open areas of the reserve takes a good 45 minutes – though you can stay all day. Wilpattu National Park, partly due to its more remote north westerly location, sees much less tourism footfall than Yala which means that when you do sight a leopard,</p>
    <br>
    <p class="p8"> sloth bear or elephant, your jeep is likely to be the only one watching it. You can take your time and maximise your enjoyment of the Wilpattu safari experience. </p>
</section>
<br>
<br>
<hr class="hr1">
<section class="sec1" id="sec2">
    <h1 class="his"><u>${getwilpattu.section_three[0].heading}</u> </h1>
    <img  class="mainimg2" src="images/shutterstock_1524292985.jpg">
       
    
    <p class="p8">${getwilpattu.section_three[1].paragraph_one}</p>
    <br>
    <p class="p8"> ${getwilpattu.section_three[2].paragraph_two}</p>
    <br>
    <p class="p8">${getwilpattu.section_three[3].paragraph_three} </p>
    <br>
    <p class="p8">${getwilpattu.section_three[4].paragraph_four}</p>
</section>
<br>




<br>
<footer id="footer">
<div>
<p>${getwilpattu.footer[0].paragraph}</p>
<!-- 333travel. (n.d.). Safari in Wilpattu National Park Sri Lanka. [online] Available at: https://www.333travel.nl/sri-lanka/tour/safari-in-wilpattu-national-park-sri-lanka [Accessed 14 Jan. 2024].
Anon, (2023). Sri Lanka Safari: Wilpattu National Park Wildlife Viewing - Aggressor Adventures. [online] Available at: https://adventuretravel.aggressor.com/2023/05/30/sri-lanka-safari-wilpattu-national-park-wildlife-viewing/ [Accessed 14 Jan. 2024].
Lonely Planet. (n.d.). Beat the crowds at these Sri Lankan national parks. [online] Available at: https://www.lonelyplanet.com/articles/sri-lankan-national-parks.
srilankanexpeditions.lk. (n.d.). Safari in Wilpattu National Park | Full Day Safari. [online] Available at: https://www.srilankanexpeditions.lk/select_one.php?tours-in-sri-lanka=Full-day-safari-in-Wilpattu-National-Park.
Uga Escapes. (n.d.). Wilpattu Sri Lanka | Wilpattu National Park. [online] Available at: https://www.ugaescapes.com/destinations/wilpattu-national-park.html.
-->
<button class='newbutton' type="submit"> Click For NewsLetter Subscription</button>
</div>

</footer>`;

let wilpattu = document.querySelector('.wilapattu');

wilpattu.innerHTML=wilpattuwa_div;

let loginbtn =document.querySelector("#wilpattuwa");
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
