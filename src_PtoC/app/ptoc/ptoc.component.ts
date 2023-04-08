import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ptoc',
  templateUrl: './ptoc.component.html',
  styleUrls: ['./ptoc.component.css']
})
export class PTOCComponent {
  @Input() public messageFromParent="";
  @Input() public messageFromParent2="";
}
