import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public MessageToChild:string = 'Waiting Forr Message';
  public MessageFromChild:string = '';

  public SendClick(){
    this.MessageToChild = 'Hello ! from Parent';
  }

  public GetMessageFromChild(e:string){
    this.MessageFromChild = e;
  }

}
