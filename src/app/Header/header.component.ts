/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'HeaderBlock',
  templateUrl: 'header.html',
  styleUrls: ['header.scss']
})
export class HeaderComponent {
  @Input() title: string;
  @Input() logoUrl: string;
}
