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
    email:null,
    image:null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService) { }
  ngOnInit(): void {}
  onSubmit(): void {
    const { username, shopName,email, password, image  } = this.form;
    this.authService.register(username,shopName, email, password ,image).subscribe({
      next: data => {
        console.log(data);this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
 
}
