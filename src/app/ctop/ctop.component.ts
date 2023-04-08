import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ctop',
  templateUrl: './ctop.component.html',
  styleUrls: ['./ctop.component.css']
})
export class CTOPComponent {

  @Output() public myEvent=new EventEmitter();
  public sendMessage()
  {
    this.myEvent.emit("Hello Parent component!");
  }
}
