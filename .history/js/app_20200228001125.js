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
        //1. getting the input from the field
        // 2
    }

    document.querySelector(".add__btn").addEventListener("click", AddInputItem);

    document.addEventListener("keypress", function(event){
        if (event.keycode === 13 || event.which === 13){
            console.log('Enter was pressed')
        }
    })
       



})(budgetController, uiController);