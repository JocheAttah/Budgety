// BUDGET CONTROLLER
var budgetController = (function() {
  // some code goes here




})();




// UI CONTROLLER
var uiController = (function() {
    // some code goes here
    DOMStrings ={
        type : '.add__type',
        description : '.add__description',
        type : '.add__type',
    }

    return {
        type: document.querySelector('.add__type').value,  // it will be either "inc" or "exp"
        description: document.querySelector('.add__description').value,
        value: document.querySelector('.add__value').value
    }



})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, uiCtrl){
    // some code goes here
    var ctrlAddItem = function (){
        //1. Get the field input data        
        console.log(uiCtrl)
        // 2. Add the Item to the budget Controller

        //3. Add the Item to the UI

        //4. Calculate the budget

        // 5. Display the budget on the UI
        
    }

    document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event){
        if (event.keycode === 13 || event.which === 13){
            ctrlAddItem()
        }
    });

})(budgetController, uiController);