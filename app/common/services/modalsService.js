'use strict';

import recipesModalTemplate from '../modals/recipesModal/recipesModalTemplate.tpl.html';
import recipesModalController from '../modals/recipesModal/recipesModalController';

export default class ModalService {
    constructor($uibModal) {
        this.modal = $uibModal;
    }
    openRecipesModal() {
        return this.modal.open({
            template: recipesModalTemplate,
            controller: recipesModalController,
            controllerAs: 'recipesModalCtrl',
            resolve: {
                products: (databaseService) => {
                    // return databaseService.recieveProducts();
                    return [{name: 'shit'}, {name: 'another shit'}]
                }
            }
        }).result;
    }
}