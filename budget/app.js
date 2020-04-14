//BUDGET CONTROLLER
var budgetController = (function() {

})();


//UI CONTROLLER
var UIController = (function() {

})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var ctrlAddItem = function() {
    console.log('ctrlAddItem');
    // 1. Get input data
    // 2. Add item to budget controller
    // 3. Add new item to UI
    // 4. Calculate budget
    // 5. Display budget on the UI
  }

  document.querySelector('.add__btn').addEventListener('click', function() {
    console.log('Button was pressed');
    ctrlAddItem();
  });

  document.addEventListener('keypress', function(event) {    
    if(event.keyCode === 13 || event.which === 13) {
      console.log('Enter was pressed');
      ctrlAddItem();
    }
  });
})(budgetController, UIController);