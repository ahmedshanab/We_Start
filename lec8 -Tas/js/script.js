let btn = document.getElementById('btn');
let num = document.getElementById('num');
let bar = document.getElementById('bar');
let progress = document.getElementById('progress');
let wrapper = document.getElementById('wrapper');
    
    
    
    
    btn.addEventListener('click' , function(){
        let i = num.innerHTML;
        let f = 0;
        let size = 100/i;
        let d = setInterval(function(){
            num.innerHTML = i--;
            if(i < 0 ){
                clearInterval(d);
            }
            
            f+=size;
            progress.style.width = f + '%';

        },1000)
    })
    
    
    
    /*
    document.getElementById('btn').addEventListener('click' , function(){

        
        document.getElementById('result').innerHTML= 'Done';
    });*/

    