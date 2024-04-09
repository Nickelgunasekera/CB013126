"use strict";


if (!localStorage.getItem('srileo')) {
    // If not stored, fetch the external JSON file
    fetch('srileo.json')
        .then(response => response.json())
        .then(data => {
            // Convert the JSON data to a string
            var jsonString = JSON.stringify(data);
  
            // Store the JSON string in localStorage
            localStorage.setItem('srileo', jsonString);
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
// let wilpattuwa = store("wilpattuwa.json", "wilpattuwa");
 //let srileo = store("srileo.json", "srileo");
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
let getsrileo=getitem('srileo');
// let getanimals=getitem('animal');
// let getyala=getitem('yala');
// let getwilpattu= getitem('wilpattuwa')

//c//onsole.log(getsrileo.body.section[0].heading)

let leo=`<main>
<h1 class="h1">${getsrileo.body.sectionone[0].Heading}</h1>
</main>
<section class="sec1">
 <div class="n55">
  <h2 class="h2"><u>${getsrileo.body.sectionone[1].Subheading}</u></h2>
     <img class="n52" src="${getsrileo.body.sectionone[2].image}">
     <p class="anipt">${getsrileo.body.sectionone[3].paragraphone}</p>
       
     <p class="anipt">${getsrileo.body.sectionone[4].paragraphtwo} </p>
     <p class="anipt">${getsrileo.body.sectionone[5].paragraphthree} </p>
     
   <br><br>
 </div>

 </section>
 <hr class="hrd">
 
 <section class="sec1">
    <div class="n55">
     <h2 class="h2"> <u>${getsrileo.body.sectiontwo[0].heading}</u></h2>
        <img class="n52" src="${getsrileo.body.sectiontwo[1].iamge}">
        <p class="anipt">${getsrileo.body.sectiontwo[2].paragraphOne}</p>
        <p class="anipt">${getsrileo.body.sectiontwo[3].paragraphTwo} </p>
   
        <p class="anipt"> ${getsrileo.body.sectiontwo[4].paragraphthree} </p>
         
        
      
       
    </div>
    </section>
    <br>
    <br>
    <hr class="hrd">
    <br>
    <section class="sec1">
        <div class="n55">
         <h2 class="h2"><u>${getsrileo.body.sectionmain[0].h2}</u></h2>
            <img class="n52" src="${getsrileo.body.sectionmain[1].image}">
            <p class="anipt">${getsrileo.body.sectionmain[2].para1}</p>
            <p class="anipt">${getsrileo.body.sectionmain[3].para2}</p>
           
            <p class="anipt"> ${getsrileo.body.sectionmain[4].para3}</p>
            <p class="anipt">${getsrileo.body.sectionmain[5].para4}</p>
            
        </div>
        </section>
        <br>
        <hr class="hrd">
        <br>
        <div>
            <h1 class="h1">${getsrileo.body.heading}</h1>
            <section class="sec1">
                
                <h2 class="h2"><u>${getsrileo.body.sectionThree[0].heading}</u></h2>
                <img class="n52" src="${getsrileo.body.sectionThree[0].image}">
                <div class="threats">
                <p class="n57">${getsrileo.body.sectionThree[1].paragraphone}</p>
                <p class="n57">${getsrileo.body.sectionThree[2].paragraphTwo}</p>
                </div>
            </section>
        </div>
        
        

        <table class="n58" border="1">
            <tr>
                <th class="n61" >Consequences</th>
                <th class="n61">Solutions</th>
            
            </tr>
            <tr class="n59">
                <td class="n60">
                    
                    <div>Habitat loss limits the available territory for leopards, leading to increased competition for resources and potential conflicts between individuals.
                    </div>
                    
                    
                </td>
                <td class="n60"> Establishing and maintaining protected areas and wildlife reserves help conserve critical leopard habitats, providing safe spaces for them to live and roam.
                </td>
            </tr>
            <tr class="n59">
                <td class="n60"> 
                    
                    <div>Shrinking habitats result in fewer prey animals, making it challenging for leopards to find sufficient food, leading to malnutrition and weakened health.
                    </div>
                </td>
                <td class="n60" >Habitat Restoration: Initiatives focused on restoring degraded habitats through reforestation, afforestation, and habitat rehabilitation contribute to creating suitable environments for leopards.</td>
            </tr>
            <tr class="n59">
                <td class="n60">
                    
                    <div> Habitat loss forces leopards into human-dominated areas, increasing the likelihood of conflicts as they may prey on domestic animals, resulting in retaliation from local communities.
                    </div>
                </td>
               <td class="n60"> Creating wildlife corridors that connect fragmented habitats allows leopards and other wildlife to move freely, maintaining genetic diversity and mitigating the effects of habitat isolation</td>
            </tr>
            <tr class="n59">
                <td class="n60">
                    
                    <div>Fragmentation of habitats isolates leopard populations, reducing genetic diversity and making them more susceptible to diseases and environmental changes.
                    </div>
                </td>
                <td class="n60">
                
                    <div>Implementing sustainable land-use practices, such as zoning to protect critical wildlife habitats and maintaining ecological corridors in urban planning, helps minimize habitat loss.
                    </div>
                    </td>
            </tr>
        </table>
        <br>
        <section class="sec1">
            <h2 class="h2"><u>${getsrileo.body.sectionfour[0].heading}</u></h2>
                <img class="n52" src="${getsrileo.body.sectionfour[1].image}">
                <div class="threats">
                <p class="n57">${getsrileo.body.sectionfour[2].paragraph}</p>
                <p class="n57"> ${getsrileo.body.sectionfour[3].paragraphTwo}</p>
                </div>
            </section>
        </div>
        

        <table class="n58" border="1">
            <tr>
                <th class="n61" >Consequences</th>
                <th class="n61">Solutions</th>
            
            </tr>
            <tr class="n59">
                <td class="n60">
                    
                    <div>Poaching for their skins, bones, and other body parts can lead to a significant reduction in leopard populations, especially in targeted regions
                    </div>
                    
                    
                </td>
                <td class="n60"> Increased patrolling in leopard habitats by trained anti-poaching teams helps monitor and prevent illegal activities. This includes the use of technology such as camera traps and drones
                </td>
            </tr>
            <tr class="n59">
                <td class="n60"> 
                    
                    <div>Targeted poaching may focus on specific traits, leading to a reduction in genetic diversity within leopard populations and increasing the risk of genetic disorders.
                    </div>
                </td>
                <td class="n60" >Engaging local communities in conservation efforts and providing alternative livelihoods can reduce their reliance on poaching and promote coexistence with leopards.</td>
            </tr>
            <tr class="n59">
                <td class="n60">
                    
                    <div> The decline in leopard numbers can disrupt the natural balance of ecosystems, affecting prey populations and other species within the food chain.
                    </div>
                </td>
               <td class="n60"> Public awareness campaigns educate communities about the importance of leopards in maintaining ecosystem health and the consequences of poaching. This helps build support for conservation initiatives.</td>
            </tr>
            <tr class="n59">
                <td class="n60">
                    
                    <div>Frequent poaching incidents can lead to changes in leopard behavior, making them more elusive and nocturnal as a survival strategy.
                    </div>
                </td>
                <td class="n60">
                    Enforcing and strengthening wildlife protection laws, and imposing severe penalties for poaching, acts as a deterrent. Collaboration with law enforcement agencies is crucial to combat illegal wildlife trade.
                    <div>
                    </div>
                    </td>
            </tr>
        </table>
        <br>

        </section>
        <section >
            <div>
                <h1 class="h2">${getsrileo.body.lastSection[0].heading}</h1>

              
                <p class="anipt">${getsrileo.body.lastSection[1].paragraphone}</p>
                  <p class="anipt">${getsrileo.body.lastSection[2].paragraphTwo}</p>
                   
                  <p class="anipt"><a href="${getsrileo.body.lastSection[4].button}" target="_blank">${getsrileo.body.lastSection[4].type}</a></p>
                  <br>
                   <br>
                </div>


        </section>
        
        <footer class="footer">
            <div>
                <p${getsrileo.footer[0].paragraph}</p>
                <!-- Anna (2023). Where to See Leopards in Sri Lanka. [online] Really Wildlife. Available at: https://www.reallywildlife.com/where-to-see-leopards-in-sri-lanka/ [Accessed 14 Jan. 2024].
Anon, (n.d.). Leopard Poaching Statistics | PoachingFacts. [online] Available at: https://www.poachingfacts.com/poaching-statistics/leopard-poaching-statistics/.
Anon, (n.d.). WildCRU | Wildlife Conservation Research Unit. [online] Available at: https://www.wildcru.org/.
Attractions in Sri lanka. (n.d.). Wilpattu National Park. [online] Available at: https://www.attractionsinsrilanka.com/travel-directory/wilpattu-national-park/ [Accessed 14 Jan. 2024].
Audubon. (2016). Global Study Reveals the Extent of Habitat Fragmentation. [online] Available at: https://www.audubon.org/news/global-study-reveals-extent-habitat-fragmentation.
Leopard Trails. (n.d.). Yala National Park | Yala Safari Camping. [online] Available at: https://leopardtrails.com/yala-national-park/ [Accessed 14 Jan. 2024].
Mahela (n.d.). Leopards in Yala National Park. [online] www.mahoora.lk. Available at: https://www.mahoora.lk/leopards-in-yala-national-park.html [Accessed 14 Jan. 2024].
the Guardian. (2016). Leopards have lost 75% of their historical habitat. [online] Available at: https://www.theguardian.com/environment/2016/may/04/leopards-have-lost-75-percent-of-historical-habitat.
-->
<button class='newbutton' id='nigga' type="submit"> Click For NewsLetter Subscription</button>
                </div>
                </footer>
`;

let srleo=document.querySelector('.leo');
//console.log(getsrileo.footer[0].paragraph)
srleo.innerHTML=leo;

let loginbtn =document.querySelector("#srileo");
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
