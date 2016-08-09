'use strict';

export default ($stateProvider, $urlRouterProvider, $locationProvider) => {

  $urlRouterProvider.otherwise('/dashboard');

  // $locationProvider.html5Mode(true);
};
