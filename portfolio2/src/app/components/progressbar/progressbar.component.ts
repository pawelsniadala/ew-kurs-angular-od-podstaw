import {
  Attribute,
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})

export class ProgressbarComponent {
  constructor (
    @Attribute('label') public label: string,
    @Attribute('striped') public striped: boolean,
    @Attribute('this') public thin: boolean,
  ) {}

  @Input()
  value: string = '0';

  @Input()
  status: string = '';
}
