import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  parentStatus: boolean = true;
  ngOnInit(){
    
  }
  toggle(){
    this.parentStatus = !this.parentStatus;
  }
}
