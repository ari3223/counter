 //all validation in our project
class Validate {
    
     //valid Date field to be full(should not be empty)
    emptyvalid(date){
         //if it full send signal
        if(date.value !== ''){
            return true;
        }
         //if its empty alert to user
        else if(date.value === ''){
            alert('please choose a Date');
        }
    }
    
     //make todays date valid for Date field in Html(match with min property in html input)
    dateValidHtml(){
         //separate month day year from other info
        let today = new Date();
        let year  = today.getFullYear(),
            month = today.getMonth()+1,
            day   = today.getDate();
         //make the month and day letter match to min in input
        if(month <10){
            month = '0'+month
        }
        if(day <10){
            day = '0'+day
        }
        today = year+'-'+month+'-'+day;
         //add todays corrected Date to min in input for validation
        document.querySelector('#Date').setAttribute('min', today);
}
     //see if user intered Date dont be lower than todays Date
    dateValidJs(dat){
        let difrence = new Date(dat.value).getTime() - new Date().getTime();
        let secends = Math.floor((difrence % (1000 * 60 )) / 1000);
        if(Math.sign(secends) === 0 || Math.sign(secends) === -1){
            return true
        }
    }
}