//BUDGET CONTROLLER
var budgetController = (function() {

    var Expense = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    }

    var Income = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    }  

    var data = {
      allItems: {
        exp: [],
        inc: []
      },
      totals: {
        exp: 0,
        inc: 0
      }
    }

    return {
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
      }
    };
})();

//UI CONTROLLER
var UIController = (function() {

  var DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }  

  return {
    getInput: function(){
      return {        
        type: document.querySelector(DOMStrings.inputType).value, //Will be either inc or exp        
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value
      }
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
  };

  
  var ctrlAddItem = function() {
    console.log('ctrlAddItem');
    var input;
    var newItem;

    // 1. Get input data
    input = UIController.getInput();
    console.log(input);

    // 2. Add item to budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);

    // 3. Add new item to UI

    // 4. Calculate budget

    // 5. Display budget on the UI

  }

  return {
    init: function() {
      console.log('App started');
      setUpEventListeners();      
    }
  }



  
})(budgetController, UIController);

controller.init();