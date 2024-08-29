import {Component,OnInit,Input,Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'test-binding',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit{
  @Input() childStatus;
  @Output() childStatusChange = new EventEmitter();
  ngOnInit(){
   
  }
  toggle(){
    this.childStatus = !this.childStatus;
    this.childStatusChange.emit(this.childStatus);
  }
}