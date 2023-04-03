
document.getElementById('messi-btn').addEventListener('click',function(){
    
    const tegName=document.querySelectorAll('li');
    if(tegName.length >4){
        
        alert('you can not add more than 5 players');
        return;
    }
    else{
    getField("messi-field");
    setInnerTexValue(getField("messi-field"))
    btnDisable('messi-btn');

    }
})
document.getElementById('neymar-btn').addEventListener('click',function(){

    const tegName=document.querySelectorAll('li');

    if(tegName.length > 4){
        
        alert('you can not add more than 5 players');
        return;
    }
    else{
        getField("neymar-field");
        setInnerTexValue(getField("neymar-field"));
        btnDisable('neymar-btn');

    }
})
document.getElementById('kylian-btn').addEventListener('click',function(){
    
    const tegName=document.querySelectorAll('li');
    if(tegName.length > 4){
        
        alert('you can not add more than 5 players');
        return;
    }
    else{
    getField("kylian-field");
    setInnerTexValue(getField("kylian-field"));
    btnDisable('kylian-btn');

    }
})
document.getElementById('vítor-btn').addEventListener('click',function(){
    
    const tegName=document.querySelectorAll('li');

    if(tegName.length > 4){
        
        alert('you can not add more than 5 players');
        return;
    }
    else{
    getField("vítor-field");
    setInnerTexValue(getField("vítor-field"));
    btnDisable('vítor-btn');
    }
})
document.getElementById('sergio-btn').addEventListener('click',function(){
   
    const tegName=document.querySelectorAll('li');

    if(tegName.length > 4){
        
        alert('you can not add more than 5 players');
        return;
    }
    else{
        getField("sergio-field");
        setInnerTexValue(getField("sergio-field"));
        btnDisable('sergio-btn');
    }
})
document.getElementById('renato-btn').addEventListener('click',function(){
   
    
    const tegName=document.querySelectorAll('li');
    if(tegName.length > 4){
        
        alert('you can not add more than 5 players');
        return;
    }
    else{
        getField("renato-field");
        setInnerTexValue(getField("renato-field"));
        btnDisable('renato-btn');
        
    }
})











