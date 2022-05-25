
let box = document.getElementById('box');
let svalue = '';
b1 = document.querySelectorAll('button');
for(x of b1){
    x.addEventListener('click',(e)=>{
        btext = e.target.innerText;
        if(btext=='X'){
            btext = '*';
            svalue += btext;
            box.value = svalue;
        }
        else if(btext == 'C'){
            svalue='';
            box.value = svalue;
        }
        else if(btext == '='){
            box.value = eval(svalue);
        }
        else{
            svalue += btext;
            box.value = svalue; 
        }
    })
}