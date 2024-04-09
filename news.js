console.log("inside the newsletter");
// let field=document.querySelector('.nwmail');
// let subscribe=document.querySelector('.button1');
// let subs=[];
// subscribe.addEventListener('click',function(e){
//     e.preventDefault();
    
//     field=document.querySelector('.nwmail');
//    //console.log(field.value);
//    subs.push(field.value)
//    console.log(subs)
//     const data=JSON.stringify(subs);
//     localStorage.setItem('subsdata',data);

   
// });

let subs=JSON.parse(localStorage.getItem('subsdata2')) || [];
let field = document.querySelector('.nwmail');
let subscribe = document.querySelector('.button1');

console.log(subs)

// let copy=subs.copy();
// console.log(copy);

subscribe.addEventListener('click',function(e){
    e.preventDefault();

    let fieldValue = field.value.trim();

    if(fieldValue){
        subs.push(fieldValue);
        localStorage.setItem('subsdata2',JSON.stringify(subs));
        field.value='';
    }else{
        console.log("enter you email address agian");
    }
});



