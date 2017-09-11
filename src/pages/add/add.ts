import { ShoppingItem } from './../../models/item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  shoppingItem = {} as ShoppingItem;
  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database : AngularFireDatabase) {

    this.shoppingItemRef$ = this.database.list('shopping-list');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  addShoppingItem(shoppingItem : ShoppingItem){
    // this.shoppingItemRef$.push(this.shoppingitem); without converting to number
    //convert to number
    this.shoppingItemRef$.push({
      itemName : this.shoppingItem.itemName,
      itemNumber : Number(this.shoppingItem.itemNumber)
    });
      console.log(shoppingItem);
      this.shoppingItem = {} as ShoppingItem;
      this.navCtrl.pop(); //takes you back 1 step so previous page

  }

}
