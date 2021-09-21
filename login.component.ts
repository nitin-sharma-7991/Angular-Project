import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private logindata:AuthServiceService)
   {

    }

  ngOnInit(): void {
  }
  onSubmit(signInForm:NgForm){
    // console.log(signInForm.value);
    // this.logindata.login().subscribe((result)=>{
    //   console.log(result)
    // })

  }

}
