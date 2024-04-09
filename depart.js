if (!localStorage.getItem('depart')) {
  // If not stored, fetch the external JSON file
  fetch('department.json')
      .then(response => response.json())
      .then(data => {
          // Convert the JSON data to a string
          var jsonString = JSON.stringify(data);

          // Store the JSON string in localStorage
          localStorage.setItem('depart', jsonString);
          window.location.reload();
      })
      .catch(error => {
          console.error('Error fetching JSON:', error);
      });
}
  

  //let depart = store("department.json", "depart");
  
  function getitem(name){
    let log=localStorage.getItem(name);
   let login= JSON.parse(log);
   return login;
  }
  
  let getdepart=getitem('depart');
  console.log(getdepart);


  let department =`<main class="maind" id="miandepart">
<img class="n50"src="${getdepart.body.main.image}">
<div class="parad">
<p class="n51">${getdepart.body.main.div.paragraph}</p>
    
    <p class="n51">${getdepart.body.main.div.paragraph1} </p>
    
    <p class="n51">${getdepart.body.main.div.paragraph3}</p>
    
</div>
    
</main>

<hr class="hrd">
<section class="secd">
<br>
<br>
<h2 class="h2d"><b>${getdepart.body.section.heading}</b> </h2>

<div class="flex-container">
<div class="flexitem" >
    <img class="flexd"src="${getdepart.body.section.image}" alt="Snr">
    <p class="pd">${getdepart.body.section.type}</p>
</div>
<div class="flexitem" >
    <img class="flexd" src="${getdepart.body.section.image1}">
    <p class="pd"> ${getdepart.body.section.type1}</p>
</div>
<div class="flexitem">
    <img class="flexd" src="${getdepart.body.section.image2}">
    <p class="pd"> ${getdepart.body.section.type2}</p>
</div>
</div>
<br>
<br>
<div class="flex-container">
<div class="flexitem">
    <img class="flexd" src="${getdepart.body.section.image3}">
    <p class="pd"> ${getdepart.body.section.type3}</p>
</div>
<div class="flexitem">
    <img class="flexd" src="${getdepart.body.section.image4}">
    <p class="pd">${getdepart.body.section.type4}</p>
</div>
<div class="flexitem">
    <img class="flexd" src="${getdepart.body.section.image5}">
    <p class="pd">${getdepart.body.section.type5}</p>
</div>
</div>
</section>
<hr class="hrd">
<div>
<h2 class="h2d">${getdepart.body.heading}</h2>
<iframe id="diframe" src="${getdepart.body.iframe}" ></iframe>
</div>

<footer class="footer">
<div>
    <p>${getdepart.footer.paragraph}</p>
    <p><!--Adobe Stock. (2012). %22Buffer Zone%22 Images – Browse 430 Stock Photos, Vectors, and Video. [online] Available at: https://stock.adobe.com/lk/search?k=%22buffer+zone%22 [Accessed 14 Jan. 2024].
        Anon, (2011). Protected Areas – Department of Wildlife Conservation. [online] Available at: https://www.dwc.gov.lk/protected-areas/.
        Anon, (2012a). Advanced Certificate in Wildlife Conservation and Management – OUSL. [online] Available at: https://ou.ac.lk/adcwildlifemgt/ [Accessed 14 Jan. 2024].
        Anon, (2012b). Department of Wildlife Conservation – We Protect Future! [online] Available at: https://www.dwc.gov.lk/.
        Anon, (2023). Minneriya Jungle Corridor In Sri Lanka - Wowtovisit. [online] Available at: https://wowtovisit.com/minneriya-jungle-corridor-in-sri-lanka/ [Accessed 14 Jan. 2024].
        Expeditions, C. (n.d.). Ritigala Strict Nature Reserve | Wildlife Holidays in Sri Lanka. [online] Ceylon Expeditions. Available at: https://www.ceylonexpeditions.com/ritigala-strict-nature-reserve-sri-lanka [Accessed 14 Jan. 2024].
        Limits, A.N. (2023). Yala National Park. [online] Adventures No Limits. Available at: https://adventuresnolimits.com/yala-national-park/ [Accessed 14 Jan. 2024].
         --></p>
         <button class='newbutton' type="submit"> Click For NewsLetter Subscription</button>
    </div>
</footer>`;

let departlink=document.querySelector('.depart');

departlink.innerHTML=department;

let loginbtn =document.querySelector("#depart");
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
