import { Component } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-app';

  constructor(private service:UserService){}

  users:User[];
  ngOnInit()
  {
      this.service.getAllUsers().subscribe(value=>this.users=value);
  }
}
