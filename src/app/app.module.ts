import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Animations
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Material
import { MaterialModule } from './material';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { EspService } from '../services/esp.service';

// Initialize Firebase
const firebaseConfig: any = {
  apiKey: "AIzaSyA4SP-I4RxEd3wz5QpMYqQVTLQRNRWDwnE",
  authDomain: "esp4a-iot-4068b.firebaseapp.com",
  databaseURL: "https://esp4a-iot-4068b.firebaseio.com",
  projectId: "esp4a-iot-4068b",
  storageBucket: "esp4a-iot-4068b.appspot.com",
  messagingSenderId: "32131762609"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
