(function () {
  'use strict';
  
  var shoppingListCheckOff = angular.module('ShoppingListCheckOff', []);
  shoppingListCheckOff
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController() {
    var buyList = this;
    
    buyList.toBuyItems = [
      {
        name: 'Cookies',
        quantity: '10 packs'
      },
      {
        name: 'Milk',
        quantity: '4 bottles'
      },
      {
        name: 'Curd',
        quantity: '7 packs'
      },
      {
        name: 'Jam',
        quantity: '3 packs'
      },
      {
        name: 'Bread',
        quantity: '2 packs'
      }
    ];
  }
  
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController() {
    var boughtList = this;
    
    boughtList.boughtItems = [];
  }
  
  function ShoppingListCheckOffService() {
    
  }
})();