import {Component, ViewEncapsulation, OnInit} from '@angular/core';

@Component({
  selector: 'my-app',
  encapsulation: ViewEncapsulation.None,
  template: `
      <div>

        <HeaderBlock
		    [title]="title"
		    [logoUrl]="logoUrl"></HeaderBlock>    

        <MainContentBlock
		    [title]="title"
        [subTitle]="subTitle"
		    [logoUrl]="logoUrl"></MainContentBlock>

        <FooterBlock 
		    [title]="title"></FooterBlock>   

      </div>
  `
})
export class AppComponent{
	title: string;
	subTitle: string;
  logoUrl: string;

    constructor() {
      this.title = 'NodeJs Indonesia';
      this.subTitle = "Indonesian NodeJs Developer Community";
      this.logoUrl = './assets/nodejs-indonesia.jpg';
    }

}
