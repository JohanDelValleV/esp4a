import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Chart } from 'chart.js';

@Injectable()
export class EspService {
    constructor(private afDB: AngularFireDatabase){

    }
    Lista=["dato1","dato2","dato3"];
    valor;
    datos=[1,2];
    public changeValue(){
        for (let index = 0; index < this.Lista.length; index++) {
            var dato= this.Lista[index];
            var dbRef = this.afDB.database.ref().child('Grafica/'+dato);
            dbRef.on('value', snap => alert(snap.val()));
        }
        
        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [{
                  label: '# of Votes',
                  data: this.datos,
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }
      });
    }

    // public ledOn() {
    //     return this.afDB.database.ref().child('LED_STATUS').set(1);
    // }
    // public ledOff() {
    //     return this.afDB.database.ref().child('LED_STATUS').set(0);
    // }
}