import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  Email:string='Email';
  PWD:string='pwd';
  

  constructor(private http: HttpClient) { }


  ngOnInit(): void {

  }
  Login(Email:string,PWD:string) {
   
    var param = {Email:Email,PWD:PWD};
    this.http.post<any>('http://localhost:5000/students/login/',param).subscribe(data => {
       
    
      //alert(JSON.stringify(data));
      if(data==null) { alert("Invalid Credentials");}
        else{
          localStorage.setItem("Student",JSON.stringify(data));
          location.assign("/subscriptions");
        }
        
    
      });

      return false
  }

}
