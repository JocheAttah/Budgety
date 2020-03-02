// BUDGET CONTROLLER
var budgetController = (function() {
  
    var Expense = function (id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function (id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var data = {
        allItems : {
            exp = 0,
            inc = 0
        },

        totals : {
            exp = 0,
            inc = 0
        }
    }

    return {
        addItems = function (type, des, val){
            var ID, newItem;

            if (data.allItems[type].length > 0){
                ID = (data.allItems[type][data.allItems.length - 1] + 1;
            } else {
                ID = 0;
            }

            if (type  === 'exp'){
                newItem = new Expense (ID, de, value)
            } else if(type === 'inc'){
                newItem = new Income (ID, de, value)
            }


            data.allItems[type].push[newItem]
            return newItem;
        }
    };

})();




// UI CONTROLLER
var uiController = (function() {
    // some code goes here
    var DOMstrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,  // it will be either "inc" or "exp"
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function(){
            return DOMstrings;
        }
    };

})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, uiCtrl){
    // some code goes here
    var setupInit = function (){
        var DOM = uiCtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

        document.addEventListener("keypress", function(event){
            if (event.keycode === 13 || event.which === 13){
                ctrlAddItem()
            }
        });
    };

    var ctrlAddItem = function (){

        var input, addItems;
        //1. Get the field input data        
        input = uiCtrl.getInput();
        // console.log(input)
        
        // 2. Add the Item to the budget Controller
        addItems = budgetCtrl.addItems(input.type, input.description, input.value);

        //3. Add the Item to the UI

        //4. Calculate the budget

        // 5. Display the budget on the UI
        
    };

    return {
        init: function(){
            console.log("Application has Started");
            return setupInit();
        }
    }
})(budgetController, uiController);

controller.init();