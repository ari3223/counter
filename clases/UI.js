class UI{
    
    showfirst(){
        first.hidden = false;
        middle.hidden = true;
        last.hidden = true;
        localStorage.setItem('page', '1')
    }
    
    showMid(){
        first.hidden = true;
        middle.hidden = false;
        last.hidden = true;
        localStorage.setItem('page', '2')
    }
    
    showLast(){
        last.hidden = false;
        first.hidden = true;
        middle.hidden = true;
        localStorage.setItem('page', '3')
    }
    
    addTitle(){
        document.querySelector('#title-countdown').textContent = localStorage.getItem('title');
        
    }
    ss(){
        console.log('obj');
    }
    
    done(){
        let place = document.querySelector('#finish-countdown');
        place.innerHTML = `finished on ${localStorage.getItem('Udate')}`;
    }
    
    cul(){
        
        distenc()
        function distenc (){
            let ate = localStorage.getItem('Udate');
        let difrence = new Date(ate).getTime()-new Date().getTime();
        
        let days    = Math.floor(difrence / (60*60*1000*24)),
            hours   = Math.floor((difrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes = Math.floor((difrence % (1000 * 60 * 60 )) / (1000  * 60)),
            secends = Math.floor((difrence % (1000 * 60 )) / 1000);
            
            
                 document.querySelector('#day').textContent  = days;
                 document.querySelector('#hour').textContent = hours;
                 document.querySelector('#min').textContent  = minutes;
                 document.querySelector('#sec').textContent  = secends;
        }
                 var counter = setInterval(distenc, 1000);
                
                
        
    
    }
}