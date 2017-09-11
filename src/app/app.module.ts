import { EditPage } from './../pages/edit/edit';
import { ListPage } from './../pages/list/list';
import { AddPage } from './../pages/add/add';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

export const config = {
  apiKey: "AIzaSyAebHAS2VCtEaKDhZXEs7tjmdobgU0C4Pg",
  authDomain: "testedit-3d836.firebaseapp.com",
  databaseURL: "https://testedit-3d836.firebaseio.com",
  projectId: "testedit-3d836",
  storageBucket: "testedit-3d836.appspot.com",
  messagingSenderId: "403640493279"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,AddPage,ListPage,EditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,AddPage,ListPage,EditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
