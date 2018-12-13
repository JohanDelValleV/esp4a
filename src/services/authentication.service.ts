import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { auth } from "firebase";

@Injectable()
export class AuthenticationService{
    constructor(public afAuth: AngularFireAuth){

    }
    signInWithGoogle(){
        return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }

    signInWithFacebook(){
        return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
    }
}