// Budget Controller

var budgetController = (function() {

})();


// UI Controller

var uiController = (function() {

    // some code goes here

})();

// GlobalA Controller

var controller = (function(budgetCtrl, uiCtrl){
       
    var z = budgetCtrl.publicTest(5);


    return {
        anotherPublic: function(){
            console.log(z);
        }
    }

   })(budgetController, uiController);