document.getElementById('calculate-btn').addEventListener('click',function(){
    const perPlayerRate=retunField('per-player-rate-field');
    

    const tegName=document.querySelectorAll('li'); 

    const totalPlayerExpense=tegName.length *perPlayerRate;

     

    const playerExpenseTOtal=document.getElementById('player-expenses-total')
    const number=playerExpenseTOtal.innerText=totalPlayerExpense;
    playerExpenseTOtal.innerText=number;
    

    
})

document.getElementById('caculate-total-btn').addEventListener('click',function(){
    const managerField=retunField('manager-field');

    const coachField=retunField('coach-field');

    const perPlayerRate=retunField('per-player-rate-field');

    const tegName=document.querySelectorAll('li'); 

    const totalPlayerExpense=tegName.length *perPlayerRate;

    const playerExpenseTOtal=document.getElementById('player-expenses-total')
    const number=playerExpenseTOtal.innerText=totalPlayerExpense;

    const totalSum=number+coachField+managerField;
    
    const totalAmount=document.getElementById('total-amount');
    totalAmount.innerText=totalSum;
})







