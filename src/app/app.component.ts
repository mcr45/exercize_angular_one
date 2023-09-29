import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lessonapp';
  user='Elon Zuckenberg the IV'
  enemy=''

  onUpdateEnemy(e:Event){
    this.enemy=(<HTMLInputElement>e.target).value
  }

}
