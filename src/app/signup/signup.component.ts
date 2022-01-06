import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHandler } from "@angular/common/http";
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Error:string='';
  User = {TrainerName:"asdasd",Mobile:"",Email:"",PWD:'',REPWD:''}
  constructor(private http: HttpClient) { }
  SignUpForm:any
  ngOnInit(): void {
    this.SignUpForm=new FormGroup(
      {
        "Email":new FormControl(this.User.Email),
        "PWD":new FormControl(this.User.PWD),
        "TrainerName":new FormControl(this.User.TrainerName),
        "Mobile":new FormControl(this.User.Mobile),
        "REPWD":new FormControl(this.User.REPWD)
        
  
  });
  }
  onSubmit(){
    this.Error='';
    if(this.SignUpForm.value.PWD !=this.SignUpForm.value.REPWD){this.Error="Password MisMatch"; return;}
    

    this.http.post<any>('http://localhost:5000/trainers/create/',this.SignUpForm.value).subscribe(data => {
       
    
  //alert(JSON.stringify(data));
  if(data.acknowledged) {
    alert('Profile Created.. Proceed to Login');
    location.assign("/login");

  }

  });
//




    
  }
}
