import { StorageService } from './../../../../../../angular-app/src/app/auth/services/Storage/storage.service';

import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './../../../../../../angular-app/src/app/auth/services/auth.service';
import { Component } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent
{
  constructor(private service: AuthService, private storage: StorageService)
  {}

  login = {
    username:"",
    password:""
  }
    form:FormGroup = new FormGroup({
      "username":new FormControl(""),
      "password":new FormControl("")
    });

    formsubmit()
    {
      this.service.login(this.form.value).subscribe(res=>{
        this.storage.saveuser(res)
      },error=>{
        console.log("Invalid Credentials")
      }
    )
    }


}
