import { Component } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication.service';
import { Chart } from 'chart.js';
import { EspService } from 'src/services/esp.service';

@Component({
  selector: 'app-root',
  templateUrl: 'grafica/grafica.component.html',
  styleUrls: ['grafica/grafica.component.css']
})
export class AppComponent {
  title = 'esp4a';
  constructor(private espService: EspService){

  }
  ngOnInit() {
    this.espService.changeValue();
  }

  // signInWithGoogle(){
  //   this.authenticationService.signInWithGoogle()
  //     .then((data) => {
  //       console.log(data);
  //       alert('logeo exitoso')
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       alert('logeo erroneo')
  //     })
  // }

  // signInWithFacebook(){
  //   this.authenticationService.signInWithFacebook()
  //     .then((data)=> {
  //       console.log(data);
  //       alert('logeo exitoso')
  //     })
  //     .catch((error)=> {
  //       console.log(error);
  //       alert('logeo erroneo')
  //     })
  // }
}
