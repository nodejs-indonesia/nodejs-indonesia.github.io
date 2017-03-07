/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'MainContentBlock',
  templateUrl: 'content.html',
  styleUrls: ['content.scss']
})
export class MainContentComponent {
	@Input() title: string;
	@Input() subTitle: string;
	@Input() logoUrl: string;
}
