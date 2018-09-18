import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/toPromise';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

  constructor(
   public db: AngularFirestore,
   public afAuth: AngularFireAuth
 ) {
 }


  public getCurrentUser() {
    const that = this;
    return new Promise<any>((resolve, reject) => {
      // const userObject =
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // resolve(user);
          that.getEvaStorage().then(snapshot => {
            console.log(snapshot);
            return resolve(user);
          }).catch(err => {
            console.log(err);
            return reject(err);
          });
        } else {
          reject('No user logged in');
        }
      });
    });
  }

  public updateCurrentUser(value) {
    return new Promise((resolve, reject) => {
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: value.name,
        photoURL: user.photoURL
      }).then(res => {
        resolve(true);
      }, err => reject(err));
    });
  }

  public getEvaStorage() {
    // const evaStorage =
    return this.db.collection('EVAStorage').doc('Records').ref.get().then((snapshot) => {
      console.log(snapshot.data());
      return snapshot;
    });
  }
    // const evaStorage: AngularFirestoreDocument<any> = this.db.doc('EvaStorage/Record)')

    /*
    return new Promise((resolve, reject) => {
      user.updateProfile({
        displayName: value.name,
        photoURL: user.photoURL
      }).then(res => {
        resolve(res)
      }, err => reject(err))
    })*/
}
