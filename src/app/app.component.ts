import { Component } from '@angular/core';
import {MyServiceService} from'./my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public persondata=[];
  
  todaydate;
  constructor(private Myservice:MyServiceService){}
  ngOnInit(){
    this.todaydate=this.Myservice.showTodayDate();
  this.Myservice.getData().subscribe((data)=>{
    this.persondata=Array.from(Object.keys(data),k=>data[k]);
  });
    

  }
  
  
  title = 'Welcome to Angular';
  description ='This page is made by Pratiksha.Get to know about more features.Welcome to first angular project.';
  
  months=["January","february","march","April","may","june","july","august","september","october","Nvember","december"];

  isAvailable =false;



}
