import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

 @Input() public MessageFromparent:string = "";

 @Output() public ChildClick:EventEmitter<string> = new EventEmitter<string>();

 public OnButtonClick(){
  this.ChildClick.emit('Hello ! from child');
 }


}
