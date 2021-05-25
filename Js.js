//Clases
 //all validation in our project
let valid = new Validate();
 //all things about ui(html)
let ui    = new UI();



//variables
 //access to the tree  mini page that we have in our project (3 div that contain our pages)
let first  = document.querySelector('.input-containar'),
    middle = document.querySelector('.counter-countdown'),
    last   = document.querySelector('.complete-countdown');



//Evenliseners
evenLisener()
function evenLisener(){
     //some validate + update our page from localstorage after every reloading
    document.addEventListener('DOMContentLoaded', afterReload);
     //take info and culcalate space between dates and made an countdown and added to our ui(then change page)
    document.querySelector('#submit').addEventListener('click', afterSub); 
     //after click this button get back page to first page and reset every thing
    document.querySelector('#reset').addEventListener('click', Reset);
    document.querySelector('#newC').addEventListener('click',Reset);
}


    
//Functions
 //some validate + update our page from localstorage after every reloading
function afterReload () {
     //based on today date valid our html field(date field)
    valid.dateValidHtml();
     //see last time wich page was active 
    let wichPage = localStorage.getItem('page');
     //show actived page with info that has have before
    switch(wichPage) {
        case '1':
            ui.showfirst();
            break;
        case null:
            ui.showfirst();
            break;
        case '2':
            ui.showMid();
            ui.cul();
            ui.addTitle();
            break;
        case '3':
            ui.showLast();
            ui.done();
            break;
        }
}

 //take info and culcalate space between dates and made an countdown and added to our ui(then change page)
function afterSub (e) {
     //access to info that user intered
    let title    = document.querySelector('#title'),
        userDate = document.querySelector('#Date');
     //add user intered date into the local storage for saving
    localStorage.setItem('Udate', userDate.value);
    localStorage.setItem('title', title.value);
     //see that user intered info or not (validate)
    let wich = valid.emptyvalid(userDate);
    let validDate = valid.dateValidJs(userDate);
     //act base on right or wrong intered info
     //fields empty or not
    if(wich){
         //valid intered date to be today or later not before(today date or higher)
        if(validDate === true){
             //its today so our counter is done
            ui.showLast();
            ui.done(userDate.value);
        }
        else{
             //its later date than today so we should culcalate space for countdown
            ui.showMid();
            ui.cul();
            ui.addTitle();
        }
    }
}
    
 //after click this button get back page to first page and reset every thing
function Reset () {
     // Reset form and local storage and get page to page 1
    ui.showfirst();
    localStorage.clear();
    document.querySelector('.form').reset();
}













