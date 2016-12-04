'use strict';

import recipesController from './recipesController';
import recipesTemplate from './recipes.tpl.html';

let recipes = angular.module('app.recipes', []);

export default recipes.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $stateProvider
        .state('root.recipes', {
            url: '/recipes',
            title: 'Recipes',
            resolve: {
                recipes: (databaseService) => {
                    return databaseService.receiveRecipes();
                }
            },
            views: {
                'root': {
                    template: recipesTemplate,
                    controller: recipesController,
                    controllerAs: 'recipesCtrl'
                }
            }
        });
})