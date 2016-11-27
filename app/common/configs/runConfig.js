'use strict';

export default ($rootScope) => {
  $rootScope.appLoading = true;

  $rootScope.$on('$stateChangeStart', (event, fromState, fromParams, toState, toParams)=>{
      console.log('stateChangeStart');
      $rootScope.appLoading = true;
  });

  $rootScope.$on('$stateChangeSuccess', (event, fromState, fromParams, toState, toParams)=>{
      console.log('stateChangeSuccess');
      $rootScope.appLoading = false;
  });



};
