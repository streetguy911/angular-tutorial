'use strict';

export default class ProductsController {

    constructor (databaseService, $http, $scope, products, categories) {
        this.databaseService = databaseService;
        this.list = products.data;
        this.categories = categories.data;
        console.log('Products Controller');
    }

    getProductsOf (cat_id) {
        return this.list.filter(el => el.categoryId == cat_id);
    }

};
