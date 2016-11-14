'use strict';

export default class ProductsController {

    constructor (databaseService, $http, $scope) {
        this.databaseService = databaseService;
        this.getProductsCategories();
        this.getProducts();
        console.log('Products Controller');
    }

    getProducts () {
        this.databaseService.recieveProducts().
            then((res) => {
                this.list = res.data;
                console.log('products: ', this.list);
            });
    }

    getProductsCategories () {
        this.databaseService.recieveProductsCategories().
            then((res) => {
                this.categories = res.data;
                console.log('categories: ', this.categories);
            });
    }

    getProductsOf (cat_id) {
        return this.list instanceof Array ? this.list.filter( el => el.categoryId == cat_id) : [];
    }

};

