import {Component, DoCheck, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MainInfo} from '../shared/main.service';

@Component({
  selector: 'app-player-five-score',
  templateUrl: './player-five-score.component.html',
  styleUrls: ['./player-five-score.component.css']
})
export class PlayerFiveScoreComponent implements OnInit, DoCheck {

  playerFiveNameCheck = this.mainService.playerFive.hasName;

  @ViewChild('playerName') playerNameInputRef: ElementRef;
  @ViewChild('playerScore') playerScoreInputRef: ElementRef;

  constructor(private mainService: MainInfo) {}

  checkScore(){
    return this.mainService.playerFive.score;
  }

  updatePlayer(){
    if (this.mainService.playerFive.hasName === false){
      this.changeScore();
      this.setName();
    } else {
      this.changeScore();
    }
  }

  changeScore() {
    this.mainService.playerFive.score += Number(this.playerScoreInputRef.nativeElement.value);
  }

  setName() {
    this.mainService.playerFive.name = this.playerNameInputRef.nativeElement.value;
    this.mainService.playerFive.hasName = true;
  }

  getName() {
    return this.mainService.playerFive.name;
  }

  ngDoCheck(){
    this.playerFiveNameCheck = this.mainService.playerFive.hasName;
  }

  ngOnInit() {

  }



}
