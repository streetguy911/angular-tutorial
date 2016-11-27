'use strict';

import databaseService from '../../common/services/databaseService';
import productsController from './productsController';
import productsTemplate from './products.tpl.html';

let products = angular.module('app.products', []);

export default products.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
  $stateProvider
    .state('root.products', {
      url: '/products',
      title: 'Products',
      resolve: {
        products: (databaseService) =>{
          return databaseService.recieveProducts();
        },
        categories: (databaseService) =>{
          return databaseService.recieveProductsCategories();
        },
      },
      views: {
        'root': {
          template: productsTemplate,
          controller: productsController,
          controllerAs: 'products'
        }
      }
    });

});
