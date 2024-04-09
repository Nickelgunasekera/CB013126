console.log("hello world");
document.addEventListener('DOMContentLoaded',function(){
let home =document.querySelector('.home');
let intro =document.querySelector('.intro');
let depart =document.querySelector('.depart');
let leo =document.querySelector('.sl');
let animal =document.querySelector('.animals');
let  yala=document.querySelector('.yala1');
let  wilpattu=document.querySelector('.wilpattu');
let txtarea=document.querySelector('#editedContent');
let savebtn=document.querySelector('#savebutton');

function getitem(name){
    let log=localStorage.getItem(name);
   let login= JSON.parse(log);
   return login;
  }
  
  let getindex=getitem('index');
  let getintro=getitem('intro');
  let getdepart=getitem('depart');
  let getsrileo=getitem('srileo');
  let getanimals=getitem('animal');
  let getyala=getitem('yala');
  let getwilpattu= getitem('wilpattuwa')

  console.log(getindex);

home.addEventListener('click',function(){
    console.log("home is clicked");
    console.log(getindex);

    let newone=JSON.stringify(getindex);
    console.log(newone)

        txtarea.textContent=newone;
        savebutton(getitem('index'),'index')
});






function savebutton(getitem,localkey){
  savebtn.addEventListener('click',function(e){
    e.preventDefault();
    let newcontent = txtarea.value || getitem();
   // console.log("newocntent is : ",newcontent);
    localStorage.setItem(localkey,newcontent);
    //console.log("updated local storage",localStorage.getItem(localkey))
  })

  
};

home.addEventListener('click',function(e)
{
    e.preventDefault();
    console.log("home is clicked");
    console.log(getindex);

    let newone=JSON.stringify(getindex);
    console.log(newone)

        txtarea.textContent=newone;
        savebutton(getitem('index'),'index')
});

 let closebtn=document.querySelector('.close-modal');

closebtn.addEventListener('click',function(){
    console.log("closing the editor page");
    window.location.href='index.html';
});

intro.addEventListener('click',function(){
    //console.log("home is clicked");
    //console.log(getindex);

    let newone=JSON.stringify(getintro);
    console.log(newone)

        txtarea.textContent=newone;
        savebutton(getitem('intro'),'intro')
});

depart.addEventListener('click',function(){
    console.log("home is clicked");
    console.log(getindex);

    let newone=JSON.stringify(getdepart);
    console.log(newone)

        txtarea.textContent=newone;
        savebutton(getitem('depart'),'depart')
});

leo.addEventListener('click',function(){
    console.log("home is clicked");
    console.log(getindex);

    let newone=JSON.stringify(getsrileo);
    console.log(newone)

        txtarea.textContent=newone;
        savebutton(getitem('srileo'),'srileo')
});

animal.addEventListener('click',function(){
    console.log("animal is clicked");
   // console.log(getindex);

    let newone=JSON.stringify(getanimals);
    console.log(newone)

        txtarea.textContent=newone;
        savebutton(getitem('animal'),'animal')
});

yala.addEventListener('click',function(){
    console.log("yala is clicked");
    //console.log(getindex);

    let newone=JSON.stringify(getyala);
    console.log(newone)

        txtarea.textContent=newone;
        savebutton(getitem('yala'),'yala')
});

wilpattu.addEventListener('click',function(){
    console.log("wilpattu is clicked");
    //console.log(getindex);

    let newone=JSON.stringify(getwilpattu);
    console.log(newone)

        txtarea.textContent=newone;
        savebutton(getitem('wilpattuwa'),'wilpattuwa')
});


});






