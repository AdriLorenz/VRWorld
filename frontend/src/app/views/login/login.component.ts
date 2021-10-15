import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User
  constructor( private loginService: LoginService, 
    private router: Router) {
  this.user = new User();
}
ngOnInit(): void {
}
  public submit(): void {
    console.log("pruebita");
  this.loginService.login(this.user).subscribe(
    (data: number) => {
      localStorage.setItem('userName', this.user.name);
      localStorage.setItem('personalToken', `${data}`);
      this.router.navigate(['/logedUser']);
    },
    (error: Error) => {
      console.error("Error al realizar el acceso- login");
    }
  )
}

}
