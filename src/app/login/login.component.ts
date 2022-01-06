import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email:string='Email';
  PWD:string='pwd';
  

  constructor(private http: HttpClient) { }


  ngOnInit(): void {

  }
  Login(Email:string,PWD:string): void {
   
    var param = {Email:Email,PWD:PWD};
    this.http.post<any>('http://localhost:5000/trainers/login/',param).subscribe(data => {
       
    
      //alert(JSON.stringify(data));
      if(data==null) { alert("Invalid Credentials");}
        else{
          localStorage.setItem("User",JSON.stringify(data));
          location.assign("/courses");
        }
        
    
      });


  }

}
