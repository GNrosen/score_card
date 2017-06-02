import {Component, DoCheck} from '@angular/core';
import {MainInfo} from './shared/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements DoCheck {
  title = 'app works!';

  appPlayerAmount = false;
  playerAmount;

  constructor(private mainService: MainInfo) {}


  ngDoCheck() {
    this.checkPlayerAmount();
    console.log('we are in docheck of app.comp.ts')
  }

  checkPlayerAmount() {
    if(this.mainService.numberOfPlayers !== 0) {
      this.appPlayerAmount = true;
      this.playerAmount = this.mainService.numberOfPlayers;
    } else if(this.mainService.numberOfPlayers === 0) {
      this.appPlayerAmount = false;
    }
  }

}
