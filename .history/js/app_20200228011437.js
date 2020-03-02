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
        value : '.add__value',
        btn: 'add__btn'
    }

    return {
        
    }
        var getInput = function() {
        type: document.querySelector(DOMStrings.type).value,  // it will be either "inc" or "exp"
        description: document.querySelector(DOMStrings.description).value,
        value: document.querySelector(DOMStrings.value).value
    },

    {
        getDOMStirings = DOMStrings
    })



})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, uiCtrl){
    // some code goes here

    DOM = uiCtrl.getDOMStrings();

    var ctrlAddItem = function (){
        //1. Get the field input data        
        var input = uiCtrl.getInput();
        console.log(input)
        // 2. Add the Item to the budget Controller

        //3. Add the Item to the UI

        //4. Calculate the budget

        // 5. Display the budget on the UI
        
    }

    document.querySelector(DOM.btn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event){
        if (event.keycode === 13 || event.which === 13){
            ctrlAddItem()
        }
    });

})(budgetController, uiController);