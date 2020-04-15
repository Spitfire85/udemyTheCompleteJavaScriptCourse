//BUDGET CONTROLLER
var budgetController = (function() {

    var Expense = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
      this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncome) {
      if (totalIncome > 0) {
        this.percentage = Math.round((this.value / totalIncome) * 100);
      } else {
        this.percentage = -1;
      }        
    };

    Expense.prototype.getPercentage = function() {
      return this.percentage;
    };

    var Income = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    }
    
    var calculateTotal = function(type) {
      var sum = 0;
      data.allItems[type].forEach(function(cur) {
        sum += cur.value;
      });
      data.totals[type] = sum;
    };

    var data = {
      allItems: {
        exp: [],
        inc: []
      },
      totals: {
        exp: 0,
        inc: 0
      },
      budget: 0,
      percentage: -1
    };

    return {
      testing: function() {
        console.log(data)
      },
      addItem: function(type, des, val) {
        var newItem;

        //Create new ID from last items ID
        if(data.allItems[type].length > 0) {
          ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
        } else {
          ID = 0;
        }
        
        // Create new items based on Inc or Exp
        if (type === 'exp') {
          newItem = new Expense(ID, des, val);
        } else if (type === 'inc') {
          newItem = new Income(ID, des, val);
        }

        //Push to data structure
        data.allItems[type].push(newItem);

        //Return the element
        return newItem;
      },
      deleteItem: function(type, id) {
        var id;
        var index;
        
        ids = data.allItems[type].map(function(current){
          return current.id;
        });

        index = ids.indexOf(id);

        if (index !== -1) {
          data.allItems[type].splice(index, 1)
        }
        
      },
      calculateBudget: function() {
        // Calculate total income and expenses
        calculateTotal('exp');
        calculateTotal('inc');

        // Calculate the budget: income - expenses
        data.budget = data.totals.inc - data.totals.exp;

        // Calculate the percentage of income that we spend
        if (data.totals.inc > 0) {
          data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
        } else {
          data.percentage = -1;
        }        
      },
      calculatePercentages: function() {
        data.allItems.exp.forEach(function(cur){
          cur.calcPercentage(data.totals.inc);
        });
      },
      getPercentages: function() {
        var allPercentages = data.allItems.exp.map(function(cur){
          return cur.getPercentage();
        });

        return allPercentages;
      },
      getBudget: function() {
        return {
          budget: data.budget,
          totalInc: data.totals.inc,
          totalExp: data.totals.exp,
          percentage: data.percentage
        }
      }
    };
})();



//UI CONTROLLER
var UIController = (function() {

  var DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expensesPercentageLabel: '.item__percentage'
  }  

  return {
    getInput: function(){
      return {        
        type: document.querySelector(DOMStrings.inputType).value, //Will be either inc or exp        
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
      }
    },

    addListItem: function (obj, type) {
      var html;
      var element;
      //1. Create HTML string placeholder
      if(type === 'inc') {
        element = DOMStrings.incomeContainer;
        html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      } else if (type === 'exp') {
        element = DOMStrings.expensesContainer;
        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      }      

      //2. Replace placeholder text
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', obj.value);

      //3. Insert HTML into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },

    deleteListItem: function(selectorID) {
      var element = document.getElementById(selectorID);
      element.parentNode.removeChild(element);
    },

    clearFields: function() {
      var fields;
      var fieldsArr;      

      fields = document.querySelectorAll(DOMStrings.inputDescription + ',' + DOMStrings.inputValue);
      fieldsArr = Array.prototype.slice.call(fields);

      fieldsArr.forEach(function(current, index, array) {
        current.value = '';
      });

      fieldsArr[0].focus();
    },

    displayBudget: function(obj) {
      document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
      document.querySelector(DOMStrings.expensesLabel).textContent = obj.totalExp;
      

      if (obj.percentage > 0) {
        document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
      } else {
        document.querySelector(DOMStrings.percentageLabel).textContent = '---';
      }
    },

    displayPercentages: function(percentages) {
      var fields = document.querySelectorAll(DOMStrings.expensesPercentageLabel);

      var nodeListForEach = function(list, callback) {
        for (var i = 0; i < list.length; i++ ) {
          callback(list[i], i);
        }
      };

      nodeListForEach(fields, function(current, index) {        
        if (percentages[index] > 0) {
          current.textContent = percentages[index] + '%';
        } else {
          current.textContent = '---';
        }
      });
    },

    getDOMStrings: function() {
      return DOMStrings;
    }
  }
})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
  
  var setUpEventListeners = function() {
    var DOM = UICtrl.getDOMStrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {    
      if(event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
  };

  var updateBudget = function() {
    // 1. Calculate budget
    budgetCtrl.calculateBudget();

    // 2. Return the budget
    var budget = budgetCtrl.getBudget();

    // 3. Display budget on the UI
    UICtrl.displayBudget(budget);
  };

  var updatePercentages = function() {
    // 1. Calc percentages
    budgetCtrl.calculatePercentages();

    // 2. Read from budget controller
    var percentages = budgetCtrl.getPercentages();

    // 3. Update UI
    UICtrl.displayPercentages(percentages);
  };
  
  var ctrlAddItem = function() {
    var input;
    var newItem;

    // 1. Get input data
    input = UIController.getInput();

    if(input.description !== '' && !isNaN(input.value) && input.value > 0 ) {
      // 2. Add item to budget controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      // 3. Add new item to UI
      UICtrl.addListItem(newItem, input.type);

      // 4. Clear fields
      UICtrl.clearFields();  

      // 5. Calculate and update budget
      updateBudget();

      // 6. Update percentages
      updatePercentages();
    }    
  };

  var ctrlDeleteItem = function(event) {

    var itemID;
    var splitID;
    var type;
    var ID;

    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if(itemID) {
      splitID = itemID.split('-');
      type = splitID[0];
      ID = parseInt(splitID[1]);

      // 1. Delete item from data source
      budgetCtrl.deleteItem(type, ID);

      // 2. Delte item from UI
      UICtrl.deleteListItem(itemID);

      // 3. Update new budget
      updateBudget();
    }
  };

  return {
    init: function() {
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      });
      setUpEventListeners();      
    }
  }  
})(budgetController, UIController);

controller.init();