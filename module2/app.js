(function () {
  'use strict';
  
  var shoppingListCheckOff = angular.module('ShoppingListCheckOff', []);
  shoppingListCheckOff
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  
  ToBuyController.$injector = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buyList = this;
    
    buyList.items = ShoppingListCheckOffService.getToBuyItems();
    
    buyList.bought = function (itemIndex) {
      ShoppingListCheckOffService.itemBought(itemIndex);
    };
  }
  
  AlreadyBoughtController.$injector = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;
    
    boughtList.items = ShoppingListCheckOffService.getBoughtItems();
  }
  
  function ShoppingListCheckOffService() {
    var checkOffService = this;
    
    checkOffService.toBuyItems = [
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
    
    checkOffService.boughtItems = [];
    
    checkOffService.getToBuyItems = function () {
      return checkOffService.toBuyItems;
    };
    
    checkOffService.itemBought = function (index) {
      var item = checkOffService.toBuyItems[index];
      checkOffService.boughtItems.push(item);
      
      checkOffService.removeToBuyItem(index);
    };
    
    checkOffService.getBoughtItems = function () {
      return checkOffService.boughtItems;
    };
    
    checkOffService.removeToBuyItem = function (index) {
      checkOffService.toBuyItems.splice(index, 1);
    };
  }
  
})();