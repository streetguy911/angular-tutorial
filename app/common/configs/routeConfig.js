'use strict';
<<<<<<< HEAD
//views
import mainTemplate from '../views/main.tpl.html';
//controllers
import mainController from '../controllers/mainController';



export default ($stateProvider, $urlRouterProvider, $locationProvider) => {
  $stateProvider
    .state('root', {
      url: '',
      abstract: true,
      views: {
        '': {
          template: mainTemplate,
          controller: mainController
        }
      }
    });
=======

export default ($stateProvider, $urlRouterProvider, $locationProvider) => {
>>>>>>> update structure

  $urlRouterProvider.otherwise('/dashboard');

  // $locationProvider.html5Mode(true);
};
