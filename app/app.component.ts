import { Component } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-project';
  loadFeature: string= 'recipe';

  onNavigate(feature: string){

    this.loadFeature = feature;

    
  }
}
