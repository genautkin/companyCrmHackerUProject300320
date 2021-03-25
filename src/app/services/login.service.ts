import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public readonly auth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router ) { }

  user:any=null

  loginWithEmailPassword(email: string, password: string){

    return new Promise(async (resolve, reject) => {
      this.auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
       
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        reject(errorMessage)
      });

      // try {
      //   const user=await this.auth.signInWithEmailAndPassword(email, password)
      // } catch (error) {
      //   var errorMessage = error.message;
      //   reject(errorMessage)
      // }


    })
   
  }

  checkIfUserLogin(){
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        this.user=user
        this.router.navigate(['dashboard'], { relativeTo: this.route });
      } else {
        this.user=null
        this.router.navigate(['login'], { relativeTo: this.route });
      }
    });

    
    
  }

  logOut(){
    this.auth.signOut()
  }
}
