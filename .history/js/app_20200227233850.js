// Budget Controller

var budgetController = (function() {

})();


var uiController = (function() {

    // some code goes here

})();


   var controller = (function(budgetCtrl, uiCtrl){
       
    var z = budgetCtrl.publicTest(5);


    return {
        anotherPublic: function(){
            console.log(z);
        }
    }

   })(budgetController, uiController);