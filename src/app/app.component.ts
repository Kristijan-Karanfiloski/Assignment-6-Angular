import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f')signupForm:NgForm

  subscriptionOptions:string[]=['Basic','Advanced','Pro']
  defaultSubs:string='Advanced'

  submitted:boolean=false;
  user={
    email:'',
    password:'',
    subscribe:''
  }





  onSubmit():void{
    this.submitted=true

    this.user.email=this.signupForm.value.email
    this.user.password=this.signupForm.value.password
    this.user.subscribe=this.signupForm.value.sub

    this.signupForm.reset()
  }

}
