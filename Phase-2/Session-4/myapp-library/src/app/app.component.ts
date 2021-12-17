import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'myapp-library';

  image1= "./assets/images/background.jpg";
  h="150";
  w="350";
  show=false;
  showPara(){
    this.show=!this.show
  }
  name="sonam soni";
  status="";
  signUp(){
    this.status="Check after sometime we are working on It..!!!"
  }
  username="";
  ontyping(event:Event){
    this.username=
    (<HTMLInputElement>event.target).value;
  }
  //Component level Interaction

  public cdata:string="";
  
}
