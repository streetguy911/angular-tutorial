'use strict';

export default class DashboardController {

    constructor (databaseService, $http) {
        this.databaseService = databaseService;
        this.$http = $http;
        this.recieveCategories();
        console.log('DashboardController');
    }

    recieveCategories () {
        console.log('this: ', this);
        this.categories = this.databaseService.getProducts();

        this.$http.get('/api/category').then(function(data){
          console.log('data:', data);
        });
    }
};

