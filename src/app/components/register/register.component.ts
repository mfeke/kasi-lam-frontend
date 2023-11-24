import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  kasis: any =
  {
    name:"kasi Lam",
    image : "https://i.postimg.cc/YSzWgRnz/1.png"
  }

 

  form: any = {
    username: null,
    shopName:null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  onSubmit(): void {
    const { username, shopName,email, password,} = this.form;
    this.authService.register(username, email, password ).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        // setTimeout(() => {
        //   window.location.replace("/login")
        // }, 1000)
      },
      error: err => {
        console.log(err)
        this.errorMessage = err.message;
        console.log(this.errorMessage)
        this.isSignUpFailed = true;
      }
    });
  }
 
}
