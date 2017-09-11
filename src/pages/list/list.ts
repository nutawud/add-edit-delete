import { EditPage } from './../edit/edit';
import { AddPage } from './../add/add';
import { ShoppingItem } from './../../models/item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController  } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";



@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  shoppinglistRef$:  FirebaseListObservable<ShoppingItem[]>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private database : AngularFireDatabase ,
    private actionSheetCtrl : ActionSheetController) {


    this.shoppinglistRef$ = this.database.list('shopping-list');
  }

  

  goToAddShopping(){
    this.navCtrl.push(AddPage);
    //this.navCtrl.setRoot(AddShoppingPage); no back button because addshopping will become the rootPage
  }
  
  selectShoppingItem(shoppingItem : ShoppingItem){
    //actionSheet [edit,delete,cancel]
  this.actionSheetCtrl.create({
  title: `${shoppingItem.itemName}`,
  buttons: [
    {
      text: 'Edit',
      handler: () =>{
        //go to edititem page
  
        this.navCtrl.push(EditPage,
          { shoppingitemID :   shoppingItem.$key });
          }
    },
  {
      text: 'Delete',
      role:'destructive',
      handler: () =>{
        //delete item
        this.shoppinglistRef$.remove(shoppingItem.$key);
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () =>{
        console.log("cancel selected");
      }
    }
  
  ]
  }).present();
  }
  
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad ShoppinglistPage');
    }

}
