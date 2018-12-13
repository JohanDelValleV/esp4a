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
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from 'src/services/authentication.service';
import { GraficaComponent } from './grafica/grafica.component';
import { GraficaService } from 'src/services/grafica.service';

// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyAuvUmILUVmpyR6-FXgkxLKPlzpCQID30o",
  authDomain: "login-c31aa.firebaseapp.com",
  databaseURL: "https://login-c31aa.firebaseio.com",
  projectId: "login-c31aa",
  storageBucket: "login-c31aa.appspot.com",
  messagingSenderId: "660576219686"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GraficaComponent
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
  providers: [AuthenticationService, EspService],
  bootstrap: [AppComponent]
})
export class AppModule { }
