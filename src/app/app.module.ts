import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyChfbiTaN7deX4Dyiggzv3vbq4LHqU50kw",
  authDomain: "fir-crud-f765e.firebaseapp.com",
  databaseURL: "https://fir-crud-f765e.firebaseio.com",
  storageBucket: "fir-crud-f765e.appspot.com",
  messagingSenderId: "450788208288"
};
@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
