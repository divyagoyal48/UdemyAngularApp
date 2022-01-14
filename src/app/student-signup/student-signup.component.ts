import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {

  Error:string='';
  User = {StudentName:"",Mobile:"",Email:"",PWD:'',REPWD:''}
  constructor(private http: HttpClient) { }
  SignUpForm:any
  ngOnInit(): void {
    this.SignUpForm=new FormGroup(
      {
        "Email":new FormControl(this.User.Email),
        "PWD":new FormControl(this.User.PWD),
        "TrainerName":new FormControl(this.User.StudentName),
        "Mobile":new FormControl(this.User.Mobile),
        "REPWD":new FormControl(this.User.REPWD)
        
  
  });
  }
  onSubmit(){
    this.Error='';
    if(this.SignUpForm.value.PWD !=this.SignUpForm.value.REPWD){this.Error="Password MisMatch"; return;}
    

    this.http.post<any>('http://localhost:5000/students/create/',this.SignUpForm.value).subscribe(data => {
       
    
  //alert(JSON.stringify(data));
  if(data.acknowledged) {
    alert('Profile Created.. Proceed to Login');
    location.assign("/login");
    
  }

  });
  
  }
}
