import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private db: AngularFireDatabase){}

  profileForm = new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('')
  });
  
  

  addDataToDb() {
    // this.db.database.ref('login').push({ Username: this.profileForm.username.value, Password: this.profileForm.password.value});
    // console.log(this.profileForm.value);
    this.db.database.ref('login').push(this.profileForm.value);

  }


  ngOnInit(): void {
  }

}
