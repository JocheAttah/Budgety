   var budgetController = (function() {

    var x = 23;

    var add = function(a){
        return x + a;
    }

    return {
        publicTest: function(b) {
            return(add(b));
        }
   }
   })();


   var uiController = (function() {

    // some code goes here

   })();


   var controller = (function(budgetCtrl, uiCtrl){



    return {
        anotherPublic: function(){

        }
    }

   })(budgetC);