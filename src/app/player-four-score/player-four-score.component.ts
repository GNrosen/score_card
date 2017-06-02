import {Component, DoCheck, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MainInfo} from '../shared/main.service';

@Component({
  selector: 'app-player-four-score',
  templateUrl: './player-four-score.component.html',
  styleUrls: ['./player-four-score.component.css']
})
export class PlayerFourScoreComponent implements OnInit, DoCheck {

  playerFourNameCheck = this.mainService.playerFour.hasName;

  @ViewChild('playerName') playerNameInputRef: ElementRef;
  @ViewChild('playerScore') playerScoreInputRef: ElementRef;

  constructor(private mainService: MainInfo) {}

  checkScore(){
    return this.mainService.playerFour.score;
  }

  updatePlayer(){
    if (this.mainService.playerFour.hasName === false){
      this.changeScore();
      this.setName();
    } else {
      this.changeScore();
    }
  }

  changeScore() {
    this.mainService.playerFour.score += Number(this.playerScoreInputRef.nativeElement.value);
  }

  setName() {
    this.mainService.playerFour.name = this.playerNameInputRef.nativeElement.value;
    this.mainService.playerFour.hasName = true;
  }

  getName() {
    return this.mainService.playerFour.name;
  }

  ngDoCheck(){
    this.playerFourNameCheck = this.mainService.playerFour.hasName;
  }

  ngOnInit() {

  }



}
