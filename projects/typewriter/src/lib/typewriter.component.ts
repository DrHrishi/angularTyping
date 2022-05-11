import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'ngtypewriter',
  template: `
  <span style="border-right:1px solid #666;animation:blink 1s; padding-right:3px;">{{writeText}}</span>
  `,
  styleUrls: ['./typewriter.css']
})
export class TypewriterComponent implements OnInit {

  @Input() StringList: Array<string>;

  @Input() speed;
  writeText= ''; loopNumber= 0; isDeleting= false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => this.writeLine(), 500); 
  }

  writeLine() {
    let i = this.loopNumber % this.StringList.length;
    let fullTxt = this.StringList[i];

    if (this.isDeleting) {
       this.writeText= fullTxt.substring(0, this.writeText.length - 1)
    } else {
      this.writeText= fullTxt.substring(0, this.writeText.length + 1)
    }

    let delTime = 90;
    if (this.isDeleting) { delTime /= 2; }
    if (!this.isDeleting && this.writeText === fullTxt) {
      delTime = this.speed || 700;
      this.isDeleting= true
    } else if (this.isDeleting && this.writeText === '') {
      this.isDeleting= false, this.loopNumber++
      delTime = this.speed || 700;
    }
    setTimeout(async () => await this.writeLine(), delTime);
  }
}
