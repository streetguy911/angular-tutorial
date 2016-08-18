'use strict';

export default class HeaderController{
  constructor(){
    console.log('headerController');
    this.sitename = 'Kitchen';
    this.user = {
      'username': 'telndima'
    }

    this.menuItems = [
      {'name':'item1', 'status': 'active', 'link': '#'},
      {'name':'item2', 'status': '', 'link': '#'},
      {'name':'item3', 'status': '', 'link': '#'}
    ];
  }
}
