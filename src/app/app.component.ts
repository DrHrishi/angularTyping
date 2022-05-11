import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularTests';
  list = ['First', 'Two jhgjh jgjhgjh gjjhhjhjjhjhhj jhgjhghjhj jgjguyug jhgjhghj ']
  
  constructor() { }

  ngOnInit() {
  }
  callListEndedFunction(e) {
  }
}
