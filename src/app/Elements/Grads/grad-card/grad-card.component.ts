import { Component, Input } from '@angular/core';
import { GradInfo } from '../../../Objects';

@Component({
  selector: 'app-grad-card',
  templateUrl: './grad-card.component.html',
  styleUrl: './grad-card.component.scss'
})
export class GradCardComponent {
@Input() Grads: GradInfo = {} as GradInfo
}
