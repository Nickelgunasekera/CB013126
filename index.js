


"use strict";

console.log('this is index');

if (!localStorage.getItem('index')) {
  // If not stored, fetch the external JSON file
  fetch('index.json')
      .then(response => response.json())
      .then(data => {
          // Convert the JSON data to a string
          var jsonString = JSON.stringify(data);

          // Store the JSON string in localStorage
          localStorage.setItem('index', jsonString);
          window.location.reload();
      })
      .catch(error => {
          console.error('Error fetching JSON:', error);
      });
}
// document.querySelector('.btn2').classList.add('hidden');
// function store(link, key) {
//   fetch(link)
//     .then(function (respose) {
//       if (!respose) {
//         return console.log("error");
//       } else {
//         return respose.json();
//       }
//     })
//     .then(function (infor) {
//       const jsstr = JSON.stringify(infor);

//       localStorage.setItem(key, jsstr);
//     })
//     .catch(function (error) {
//       console.log(`error is ${error}`);
//     });
// }

// let index = store("index.json", "index");
// let intro = store("introduction.json", "intro");
// let depart = store("department.json", "depart");
// let animal = store("animal.json", "animal");
// let yala = store("yala.json", "yala");
// let wilpattuwa = store("wilpattuwa.json", "wilpattuwa");
// let srileo = store("srileo.json", "srileo");
// let login = store("login.json", "login");

console.log()
//retrive

function getitem(name){
  let log=localStorage.getItem(name);
 let login= JSON.parse(log);
 return login;
}

let getindex=getitem('index');
// let getintro=getitem('intro');
// let getdepart=getitem('depart');
// let getsrileo=getitem('srileo');
// let getanimals=getitem('animal');
// let getyala=getitem('yala');
// let getwilpattu= getitem('wilpattuwa')

console.log(getindex.div.main.paragraph1[0].content)

// let logdata = localStorage.getItem("login");
// let newlog = JSON.parse(logdata);
// let nwe = newlog.users;

let title=`<h1 class="${getindex.header.h1}" id="${getindex.header.id}">${getindex.header.heading}</h1> `;
let titlelink=document.querySelector('.h1main-header');

titlelink.innerHTML+=title;

console.log(getindex.div.main.paragraph1[0].content);
let div_mk= `<ul class="${getindex.div.main.ul}">
                   
<p class="${getindex.div.main.pclass}"><li>${getindex.div.main.paragraph}
                  <!--ordered list-->
                            <ol class="ol1" type="i">
                             <li>${getindex.div.main.orderedlist[0].content}</li>
                             <li>${getindex.div.main.orderedlist[1].content}</li>
                            </ol>
                          </li> </p>

     <p class="${getindex.div.main.pclass}">${getindex.div.main.paragraph1[0].content}
          
           <a href="${getindex.div.main.paragraph1[2].Url}" target="_blank">${getindex.div.main.paragraph1[1].button}</a>
      </p>
</ul>`;

let mk_class=document.querySelector('.mk');

mk_class.innerHTML+=div_mk;

// // console.log(getindex.div.main.ul);
// // console.log("ehllo")
console.log(getindex.section.paragraph)

let hello_div=  `<h1 class="${getindex.h1class}">${getindex.heading}</h1>
                      
                           
<section class="${getindex.section.class1}">
 <!-- section one :srilanka offer the best big safaris outside of africa-->
  
       
            <h2 class="${getindex.section.h2class}"><u>${getindex.section.heading}</u></h2>

              <img class="${getindex.section.imageclass}" id="${getindex.section.imageid}" src="${getindex.section.image}" alt="wildlife safari">
              <div class="">
               <ul class="${getindex.section.ulclass}">
                  <!-- -->
                     <p class="${getindex.section.unorderdlist[0].pclass}"><li>${getindex.section.unorderdlist[0].paragraph}</li></p>
                                  <p class="${getindex.section.unorderdlist[1].pclass}"><h2>${getindex.section.unorderdlist[1].heading}</h2>
                                    <!-- unorderd list-->
                                    <ul class="${getindex.section.unorderdlist[1].ponits[0].ulclass}">
                                          <li> ${getindex.section.unorderdlist[1].ponits[0].point}</li>
                                          <li> ${getindex.section.unorderdlist[1].ponits[1].point}</li>
                                          <li>${getindex.section.unorderdlist[1].ponits[2].point}</li>
                                    </ul>
                                  </p>
                            
                                 <p class="${getindex.section.paragraph[0].pclass}"><li>${getindex.section.paragraph[0].content}
                         
                                 <a href="${getindex.section.paragraph[1].url}" target="_blank">${getindex.section.paragraph[1].button}</a>
                                </li></p>
                              </div>
                
               </section>`;

let hello = document.querySelector('.hello');

hello.innerHTML+=hello_div;

//console.log(getindex.section1.div.paragraph.unorderdlist[0].class)

let sec1 =`<h2 class="${getindex.section1.h2class}"><u>${getindex.section1.heading}</u> </h2>
<br>

   <img class="${getindex.section1.imgclass}" src="${getindex.section1.image}" alt="${getindex.section1.alt}">
                <p class="${getindex.section1.div.pclass}"> ${getindex.section1.div.para1}
       </p>
            <br>
            <div class="${getindex.section1.div.divclass}">
          <p class="${getindex.section1.div.paragraph.pclass}"> ${getindex.section1.div.paragraph.content}
                <h1>${getindex.section1.div.paragraph.heading}</h1>
                <br>
                <!--unordered list-->
                   <ul class="${getindex.section1.div.paragraph.unorderdlist[0].class}">
                     <li>${getindex.section1.div.paragraph.unorderdlist[1].l1}</li>
                     <li>${getindex.section1.div.paragraph.unorderdlist[2].l2}</li>
                     <li>${getindex.section1.div.paragraph.unorderdlist[3].l3}</li>
                     
                   </ul>

          </p>
            </div>`;

let sec_link=document.querySelector('.sec1');

sec_link.innerHTML+= sec1;


let sec2 =`  <h2 class="${getindex.section3.h2}"><u>${getindex.section3.heading}</u></h2>
<br>
    <img class="${getindex.section3.imagecls}" id="" src="${getindex.section3.image}" >
   
    <p class="${getindex.section3.paragraphcls}"> 
                    ${getindex.section3.paragraph}
                     
            </p>
           <p class="${getindex.section3.paragraphcls}">${getindex.section3.paragraph1}</p>
          
        <p class="${getindex.section3.paragraphcls}"> ${getindex.section3.paragraph2}</p>
              <br>
                    
    
    <br>


<br>

</ol>`;

let sec2_link= document.querySelector('.hello1');

sec2_link.innerHTML += sec2;

let ft = `<footer class="${getindex.footer.ftcls}">
<!--copy write and references-->
<div>
 
</div>
<br>
<br>
<div>
 

<p>${getindex.footer.paragraph}</p>
<p><!--overa tours. (n.d.). Retrieved from overatours: https://overatours.com/trip/whale-watching-mirissa/
 sri lanka driver car rent. (n.d.). Retrieved from sri lanka driver car rent: https://www.srilankadrivercarrent.com/wildlife-safari-sri-lanka/
 team, O. (2018, anugust 30). Retrieved from on the go tours: https://www.onthegotours.com/blog/2018/08/why-sri-lanka-is-the-next-big-wildlife-destination/
 Travel map Sri Lanka. (n.d.). Retrieved from Travel map Srilanka: https://www.travelmapsrilanka.com/wildlife-sri-lanka.php
 wallpaper Flare. (n.d.). HD wallpaper: Dark background, 4K, Leopard. Retrieved from wallpaper flare: https://www.wallpaperflare.com/dark-background-4k-leopard-wallpaper-jymy
 walls pic. (n.d.). Retrieved from walls pic: https://wallspic.com/image/12832-indian_elephant-wilderness-wildlife-elephant-ecosystem -->

 </p>
 <button class='newbutton' type="submit"> Click For NewsLetter Subscription</button>
</div>

</footer>
`;

let ft_link= document.querySelector('.ft');

ft_link.innerHTML=ft;




let loginbtn =document.querySelector(".btn1");
// let error = document.querySelector(".error-message");

loginbtn.addEventListener('click',function(){
  console.log("button clicked");
  window.location.href='login.html';
loginbtn.classList.add('.hidden');
})

let newbutton=document.querySelector('.newbutton');

newbutton.addEventListener('click',function(){
  window.location.href='newsletter.html';
})


let btn=document.querySelector('.btn2');
btn.addEventListener('click',function(){
  window.location.href='edticontent.html';
})

let username = document.querySelector("#username").value;
let password = document.querySelector("#password").value;

if(password==='admin' || password=='user'){
  loginbtn.classList.add('hidden')
}else{
  console.log("eroor");
}
