'use strict';

import angular from 'angular';
import bootstrap from 'angular-bootstrap';
import uiRouter from 'angular-ui-router';
import modal from 'angular-ui-bootstrap/src/modal'

//modules
import common from './common';
import root from './modules/root';
import dashboard from './modules/dashboard';
import products from './modules/products';
import admin from './modules/admin';
import recipes from './modules/recipes';


angular.module('app', [
    uiRouter,
    modal,
    common.name,
    root.name,
    dashboard.name,
    products.name,
    admin.name,
    recipes.name
]);

