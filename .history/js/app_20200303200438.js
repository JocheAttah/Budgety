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
            exp: [],
            inc: []
        },

        totals : {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItems : function (type, des, val){
            var ID, newItem;

            // Create new ID
            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Create new item based on 'inc' or 'exp' type
            if (type  === 'exp'){
                newItem = new Expense(ID, des, val)
            } else if(type === 'inc'){
                newItem = new Income(ID, des, val)
            }

            //push it into the data structure
            data.allItems[type].push(newItem);
            
            // return the nw element
            return newItem;
        },
        testing :  function (){
            console.log(data);
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
        inputBtn: '.add__btn',
        inputIncome: '.income__list',
        inputExpenses: '.expenses__list'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,  // it will be either "inc" or "exp"
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        addListItem: function(obj, type){
            var html, newHtml;
            
            if (type === 'inc'){
                element = document.querySelector(DOMstrings.inputIncome);
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if (type === 'exp'){
                element = document.querySelector(DOMstrings.inputExpenses);
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            element.insertAdjacentHTML('beforeend', newHtml);

        },

        clearFields: function () {
            var fields, fieldArr;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);

            fieldArr = Array.prototype.slice.call(fields);
            
            console.log(fieldArr);

            fieldArr.forEach((field) => field = '');

            fieldArr[0].focus();
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

        var input,newItem;
        //1. Get the field input data        
        input = uiCtrl.getInput();
        // console.log(input)
        
        // 2. Add the Item to the budget Controller
       newItem = budgetCtrl.addItems(input.type, input.description, input.value);

        //3. Add the Item to the UI
        uiCtrl.addListItem (newItem, input.type)

        //3.5 

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