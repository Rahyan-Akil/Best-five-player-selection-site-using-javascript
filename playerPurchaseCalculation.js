document.getElementById('calculate-btn').addEventListener('click', function (){
    //to get value in the calculate per player field
    const PlayerPerCostField = getInputFieldValueById('player-per-cost-field');
    
    const totalPlayerCost = PlayercartArray.length * PlayerPerCostField;

    /* adding the value with the total-btn */
    setTextElementValueById('player-expense-text-amount',totalPlayerCost);
})
//calculate total-button work
document.getElementById('calculate-total-btn').addEventListener('click',function(){

    const ManagerExpenseField = getInputFieldValueById('manager-expense-field');
 /* console.log(ManagerExpenseField); */

 const coachExpenseField = getInputFieldValueById('coach-expense-field');
/*  console.log(coachExpenseField); */

 /* redefining the playerpercost the get the value in this second event handler */

 const PlayerPerCostField = getInputFieldValueById('player-per-cost-field');
 const totalPlayerCost = PlayercartArray.length * PlayerPerCostField;

 /* adding values */
 const totalExpense =totalPlayerCost + ManagerExpenseField + coachExpenseField;
 console.log(totalExpense);
 
 setTextElementValueById('total-btn',totalExpense);
})


