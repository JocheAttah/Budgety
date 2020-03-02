// BUDGET CONTROLLER
var budgetController = (function() {
  // some code goes here




})();




// UI CONTROLLER
var uiController = (function() {
    // some code goes here
    var DOMStrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputBtn: 'add__btn'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,  // it will be either "inc" or "exp"
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputVlue).value
            };
        },

        getDOMstrings: function(){
            return DOMStrings;
        }
    };

})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, uiCtrl){
    // some code goes here

    DOM = uiCtrl.getDOMstrings();

    var ctrlAddItem = function (){
        //1. Get the field input data        
        var input = uiCtrl.getInput();
        console.log(input)
        // 2. Add the Item to the budget Controller

        //3. Add the Item to the UI

        //4. Calculate the budget

        // 5. Display the budget on the UI
        
    }

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event){
        if (event.keycode === 13 || event.which === 13){
            ctrlAddItem()
        }
    });

})(budgetController, uiController);