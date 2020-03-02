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

        // 2. Add the Item 
        //3. add it to the uI
        //4. calculate the budget
        // 5. updae the UI
    }

    document.querySelector(".add__btn").addEventListener("click", AddInputItem);

    document.addEventListener("keypress", function(event){
        if (event.keycode === 13 || event.which === 13){
            console.log('Enter was pressed')
        }
    })
       



})(budgetController, uiController);