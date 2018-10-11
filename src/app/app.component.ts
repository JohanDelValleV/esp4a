import { Component } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'login/login.component.html',
  styleUrls: ['login/login.component.css']
})
export class AppComponent {
  title = 'esp4a';
  constructor(private authenticationService: AuthenticationService){

  }
  login(){
    this.authenticationService.login()
      .then((data) => {
        console.log(data);
        alert('logeo exitoso')
      })
      .catch((error) => {
        console.error(error);
        alert('logeo erroneo')
      })
  }
}
