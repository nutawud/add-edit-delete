import { ShoppingItem } from './../../models/item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from "rxjs/Subscription";
import { FirebaseObjectObservable,AngularFireDatabase } from "angularfire2/database";

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  shoppingItemSubscription : Subscription;
  shoppingObjRef$ : FirebaseObjectObservable<ShoppingItem>;
 shoppingItem = {} as ShoppingItem;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database : AngularFireDatabase) {

      const shoppingItemId =this.navParams.get('shoppingitemID');
      console.log(shoppingItemId);
      
      this.shoppingObjRef$ = this.database.object(`shopping-list/${shoppingItemId}`);
    
      this.shoppingItemSubscription =
      this.shoppingObjRef$.subscribe(shopping => this.shoppingItem = shopping);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }
  editshoppingItem(shoppingItem : ShoppingItem){
    this.shoppingObjRef$.update(shoppingItem);
    this.navCtrl.pop();
  }
  ionViewWillLeave(){
    //free resources when leave the page
    this.shoppingItemSubscription.unsubscribe();
  }

}
