'use strict';

import angular from 'angular';
import bootstrap from 'angular-bootstrap';
import uiRouter from 'angular-ui-router';

//modules
import common from './common';
import root from './modules/root';
import dashboard from './modules/dashboard';


angular.module('app', [
    uiRouter,
    common.name,
    root.name,
    dashboard.name
]);

