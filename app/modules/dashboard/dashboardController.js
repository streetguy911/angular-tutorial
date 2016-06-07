'use strict';

export default class DashboardController {

    constructor (databaseService) {
        this.databaseService = databaseService;
        this.recieveCategories();
    }

    recieveCategories () {
        console.log(this);
        this.categories = this.databaseService.getProducts();
    }
};

