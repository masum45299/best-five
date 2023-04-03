function getField(field){
    const messi=document.getElementById(field);
    const messiField=messi.innerText;
    return messiField;
}
function btnDisable(sentId) {
    const getId=document.getElementById(sentId);
    getId.disabled=true;
    getId.style.backgroundColor='gray';
  }
function setInnerTexValue(innerTextValue){
    const choosePlayer=document.getElementById('choose-player');
    const addli=document.createElement('li');
    addli.innerText=innerTextValue;
    addli.classList.add("pb-3");
    choosePlayer.appendChild(addli);
}

function retunField(fieldId){
    const retunRate=document.getElementById(fieldId);
    const retunRateString=retunRate.value;
    const retunRateNumber=parseInt(retunRateString)
    return retunRateNumber
}


