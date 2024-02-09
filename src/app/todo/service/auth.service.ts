import {Injectable, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {ToastrService} from "ngx-toastr";
import 'firebase/compat/auth';
import firebase from "firebase/compat/app";

@Injectable({
    providedIn: 'root'
})
export class AuthService implements OnInit {

    userIsSignedIn: boolean = false;
    userEmail: string = '';

    constructor(private afAuth: AngularFireAuth,
                private toastr: ToastrService,
    ) {
        console.log('AuthService constructor called');

        this.afAuth.authState.subscribe((user) => {
            if (user) {
                this.userIsSignedIn = true;
                this.userEmail = user.email!;
            } else {
                this.userIsSignedIn = false;
                this.userEmail = '';
            }
        });
    }

    ngOnInit(): void {
    }

    signUp(email: string, password: string) {
        this.signOut();
        this.afAuth.createUserWithEmailAndPassword(email, password);
    }

    signInWithEmail(email: string, password: string) {
        this.signOut();
        this.afAuth.signInWithEmailAndPassword(email, password).then(() => {
            console.log('Successfully signed in');
        }).catch((error) => {
            console.log(error);
        });
    }

    signInWithGoogle() {
        this.signOut();
        this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider).then(() => {
            console.log('Successfully signed in');
        }).catch((error) => {
            console.log(error);
        });
    }

    signOut() {
        this.afAuth.signOut().then(() => {
            console.log('Successfully signed out');
        }).catch((error) => {
            console.log(error);
        });
    }
}
