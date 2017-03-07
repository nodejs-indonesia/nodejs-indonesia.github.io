/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'FooterBlock',
  templateUrl: 'footer.html',
  styleUrls: ['footer.scss']
})
export class FoooterComponent {
  @Input() title: string;
}
