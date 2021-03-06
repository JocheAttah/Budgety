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

    var calculateTotals = function(type){
        var sum = 0;
        data.allItems[type].forEach((cur) => sum += cur.value);
        data.totals[type] = sum;
    }

    var data = {
        allItems : {
            exp: [],
            inc: []
        },

        totals : {
            exp: 0,
            inc: 0
        },
        budget : 0,
        percentage: -1
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
        calculateBudget : function(){
            // 1. calculate total income and expenses
            calculateTotals('exp');
            calculateTotals('inc');

            // 2. calculate Budget
            data.budget = data.totals.inc - data.totals.exp;

            // 3. calculate percentage
            if( data.totals.inc > 0) {
                data.percentage =  Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
            
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
        inputExpenses: '.expenses__list',
        budgetLabel:'.budget__value',
        incomeLabel:'.budget__income--value',
        expenseLabel:'.budget__expenses--value',
        percentage:'.budget__expenses--percentage',
        container: '.container'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,  // it will be either "inc" or "exp"
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
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

        deleteListItem: function(){

        },

        clearFields: function () {
            var fields, fieldArr;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);

            fieldArr = Array.prototype.slice.call(fields);
            
            fieldArr.forEach((field) => field.value = '');

            fieldArr[0].focus();
        },

        displayBudget: function (obj){
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expenseLabel).textContent = obj.totalExp;
            if(obj.percentage > 0){
                document.querySelector(DOMstrings.percentage).textContent = obj.percentage + '%';
            }else{
                document.querySelector(DOMstrings.percentage).textContent = '---';
            }
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

    var updateBudget = function() {
            //1. Calculate the budget
            budgetCtrl.calculateBudget();
            
            //2. return the budget
            var budget = budgetCtrl.getBudget();

            // 3. Display the budget on the UI
            console.log(budget);
            uiCtrl.displayBudget(budget);
    }
    var ctrlAddItem = function (){

        var input,newItem;
        //1. Get the field input data        
        input = uiCtrl.getInput();
        // console.log(input)
        if(input.description !== '' && !isNaN(input.value) && input.value > 0){
            // 2. Add the Item to the budget Controller
            newItem = budgetCtrl.addItems(input.type, input.description, input.value);

            //3. Add the Item to the UI
            uiCtrl.addListItem (newItem, input.type)

            //3.5 clear the field
            uiCtrl.clearFields()

            //4 . update budget
            updateBudget()

        }

        var 
        
        
    };

    return {
        init: function(){
            console.log("Application has Started");
            return setupInit();
        }
    }
})(budgetController, uiController);

controller.init();