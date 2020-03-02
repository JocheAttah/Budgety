// BUDGET CONTROLLER
var budgetController = (function() {
  // some code goes here




})();




// UI CONTROLLER
var uiController = (function() {
    // some code goes here



})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, uiCtrl){
    // some code goes here
    var AddInputItem = function (){
        //1. Get the field input data        

        // 2. Add the Item to the budget Controller

        //3. Add the Item to the UI

        //4. Calculate the budget

        // 5. Display the budget on the UI
    }

    document.querySelector(".add__btn").addEventListener("click", AddInputItem);

    document.addEventListener("keypress", function(event){
        if (event.keycode === 13 || event.which === 13){
            ctrl
        }
    })
       



})(budgetController, uiController);