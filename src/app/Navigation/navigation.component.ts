/**
 * Created by irfan.maulana on 1/8/2017.
 */
import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'NavigationBlock',
  templateUrl: 'navigation.html',
  styleUrls: ['navigation.scss']
})

export class NavigationComponent {
  @Input()
  title: string;
  @Input()
  logoUrl: string;

  constructor(
  ) {}

}
