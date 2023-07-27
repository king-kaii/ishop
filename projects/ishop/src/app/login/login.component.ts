import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router){}

ngOnInit(): void {
  
}

LoginClick(userdetails:any){
      if(userdetails.UserId=='kaii1' && userdetails.Password=='king1'){
        this.router.navigate(['shop']);
      }
      else{
        this.router.navigate(['loginerror']);
      }
  }

}
