"use strict";


if (!localStorage.getItem('animal')) {
  // If not stored, fetch the external JSON file
  fetch('animal.json')
      .then(response => response.json())
      .then(data => {
          // Convert the JSON data to a string
          var jsonString = JSON.stringify(data);

          // Store the JSON string in localStorage
          localStorage.setItem('animal', jsonString);
          window.location.reload();
      })
      .catch(error => {
          console.error('Error fetching JSON:', error);
      });
}

// let index = store("index.json", "index");
// let intro = store("introduction.json", "intro");
// let depart = store("department.json", "depart");
 //let animal = store("animal.json", "animal");
// let yala = store("yala.json", "yala");
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
let getanimals=getitem('animal');
// let getyala=getitem('yala');
// let getwilpattu= getitem('wilpattuwa')
console.log(getanimals.body.sectionone[0].heading)
let animals=`       
<br> 
    <div>
        <section class="n70">
            
            <h2 class="h2">${getanimals.body.sectionone[0].heading}</u></h2>
            <img class="n56" src="${getanimals.body.sectionone[1].image}">
            <div class="divan3">
            <p class="anipt">${getanimals.body.sectionone[2].paragraphone} </p>
            
            <p class="anipt">${getanimals.body.sectionone[3].paragraphTwo}</p>
            </section>
        </div>
    </div>
    
    <hr class="hrd">
     <br>
     <div>
        <section class="n70">
            
            <h2 class="h2"><u><b>${getanimals.body.sectiontwo[0].heading}</b></u></h2>
            <img class="n56" src="${getanimals.body.sectiontwo[1].image}">
            <div class="divan3">
            <p class="anipt">${getanimals.body.sectiontwo[2].paragraphone}</p>
            <p class="anipt"> ${getanimals.body.sectiontwo[3].paragraphTwo}</p>
            </div>
            
            
    </div>
    <hr class="hrd">
    <br>
    <div>
        <section class="n70">
            
            <h2 class="h2"><u>${getanimals.body.sectionthree[0].heading}</u></h2>
            <img class="n56" id="n85" src="${getanimals.body.sectionthree[1].image}">
            <div class="divan3">
            <p class="anipt">${getanimals.body.sectionthree[2].paragraphone}</p>
            <p class="anipt">${getanimals.body.sectionthree[3].paragraphTwo}</p>
            </div>
        </section>
    </div>
  
    <hr class="hrd">
    <div>
        <section class="n70">
            
            <h2 class="h2"><u>${getanimals.body.sectionfour[0].heading}</u></h2>
            <img class="n56" src="${getanimals.body.sectionfour[1].image}">
            <div class="divan3">
            <p class="anipt">${getanimals.body.sectionfour[2].paragraphone} </p>
            <p class="anipt">${getanimals.body.sectionfour[3].paragraphTwo}</p>
            </div>
        </section>
    </div>
 
    <hr class="hrd">
    <div>
        <section class="n70" >
            
            <h2 class="h2" ><u>${getanimals.body.sectionfive[0].heading}</u></h2>
            <img class="n56" id="n84"src="${getanimals.body.sectionfive[1].image}">
            <div class="divan3">
            <p class="anipt">${getanimals.body.sectionfive[2].paragraphone}</p>
            <p class="anipt">${getanimals.body.sectionfive[3].paragraphTwo}</p>
            </div>
        </section>
    </div>
    <br>
    <h1 class="h2" id="n80">${getanimals.body.heading} </h1>
    <section class="n70" >
        <div class="anilink" id="ani1">
           <h2 class="head1" ><u> ${getanimals.body.sectionsix[0].heading}</u></h2>
           
         
           
           <img class="n56" id="n83" src="${getanimals.body.sectionsix[1].image}">
             <div class="div2">
             <p class="anipt">${getanimals.body.sectionsix[2].paragraph}</p>
                <p class="anipt"> ${getanimals.body.sectionsix[3].paragraphtwo}</p>
                   <p class="anipt">${getanimals.body.sectionsix[4].paragraphthree}<br> <a class="an" href="${getanimals.body.sectionsix[5].button}" target="_blank">${getanimals.body.sectionsix[5].type}</a></p>
           </div>
        </div>
        <br>
        
    </section>
    
    <br>
    <section class="n70" >
        <div class="anilink" id="ani2">
           <h2 class="head1" ><u>${getanimals.body.sectionseven[0].heading}</u></h2>
             
           <img class="n56" id="n82" src="${getanimals.body.sectionseven[1].image}">
             <div class="div1"  >
           <p class="anipt" >${getanimals.body.sectionseven[2].paragraph}</p> 
            <p class="anipt" >${getanimals.body.sectionseven[3].paragraphtwo}</p> 
            <p class="anipt" >${getanimals.body.sectionseven[4].paragraphthree}</a></p>
        
           
            
             </div>
        </div>
    </section>

   
<br>
<footer class="footer">
<div>
    <p>${getanimals.footer[0].paragraph}</p>
    <!-- endemic-animals. (n.d.). Retrieved from animalia.bio: https://www.animalia.bio/endemic-lists/country/endemic-animals-of-sri-lanka
     LIBRARY, F. & B.P. (n.d.). Purple-faced Langur - Stock Image - F031/3959. [online] Science Photo Library. Available at: https://www.sciencephoto.com/media/1133660/view/purple-faced-langur [Accessed 14 Jan. 2024].
lovidhu.com. (n.d.). Sri Lankan Junglefowl. [online] Available at: https://www.lovidhu.com/animals/article/sri-lankan-junglefowl [Accessed 14 Jan. 2024].
nandithachandraprakash (2023). Environmentalists denounce Sri Lanka’s talks of exporting 100,000 crop-raiding macaques. [online] Mongabay-India. Available at: https://india.mongabay.com/2023/05/environmentalists-denounce-sri-lankas-talks-of-exporting-100000-crop-raiding-macaques/ [Accessed 14 Jan. 2024].
Nature Trails. (n.d.). Sri Lankan Sloth Bear | Cinnamon Nature Trails Sri Lanka. [online] Available at: https://www.cinnamonnaturetrails.com/the-wildlife/sloth-bear.html.
neprimateconservancy.org. (2021). Red Slender Loris, Loris tardigradus | New England Primate Conservancy. [online] Available at: https://neprimateconservancy.org/red-slender-loris/ [Accessed 14 Jan. 2024].
-->
<button class='newbutton' type="submit"> Click For NewsLetter Subscription</button>
    </div>

</footer>`;

let animallink=document.querySelector('.anima');

animallink.innerHTML=animals;

let loginbtn =document.querySelector("#animal");
let error = document.querySelector(".error-message");

loginbtn.addEventListener('click',function(){
  console.log("button clicked");
  window.location.href='login.html';
  loginbtn.classList.add('.hidden');
})

let newbutton=document.querySelector('.newbutton');

newbutton.addEventListener('click',function(){
  window.location.href='newsletter.html';
})
