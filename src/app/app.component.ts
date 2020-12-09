import { Component } from '@angular/core';
import { CastsService} from './services/casts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';
  constructor(private cast:CastsService) {
    this.cast.getData().subscribe(data => {
      console.warn(data)
    })
  }
}
