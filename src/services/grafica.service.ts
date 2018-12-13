import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from "firebase";
import { Chart } from 'chart.js';

@Injectable()
export class GraficaService{
    constructor(public afDB: AngularFireDatabase){

    }
    
}