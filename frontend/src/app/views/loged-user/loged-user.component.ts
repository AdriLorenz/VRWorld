import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loged-user',
  templateUrl: './loged-user.component.html',
  styleUrls: ['./loged-user.component.css']
})
export class LogedUserComponent implements OnInit {

  public miToken: number;
  public userName: string | null;
  constructor() {
    this.miToken = 0;
    this.userName = "";
  }
  ngOnInit(): void {
    if (localStorage.getItem('personalToken')) {
      this.miToken = +localStorage.getItem('personalToken')!;
    }
    if (localStorage.getItem('userName')) {
      this.userName = localStorage.getItem('userName');
    }
  }
  public logout(): void {
    if (localStorage.getItem('personalToken')) {
      console.log("aaaa")
      localStorage.removeItem('personalToken');

    }
  }
}

