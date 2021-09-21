import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validator} from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {
  alert : boolean =false;
  message: any;
 roletext : any;
  addusers = new FormGroup({
    name :new FormControl(''),
    email :new FormControl(''),
    password :new FormControl(''),
    mobile :new FormControl(''),
    role :new FormControl('')
  })

  constructor(private admin:AdminService) { }
 

  ngOnInit(): void {
  }

  createuser(){
  //  console.log(this.addusers.value);
  

    this.admin.addUser(this.addusers.value).subscribe((result)=>{
      // let resp =JSON.stringify(result);
      
      switch (result['role']) {
         case "2":
          this.roletext = "Staff";
          break;
        case "3":
          this.roletext = "User";
          break;
        default:
          this.roletext = "Admin";
      }
      this.message = this.roletext + " Created Successfully";
    
      // console.log("GEt Data From Servies",result)
    });
    this.alert=true
    this.addusers.reset({})
  
  }
closeAlert()
{
  this.alert=false
}
}
