import {Component, DoCheck, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MainInfo} from '../shared/main.service';

@Component({
  selector: 'app-player-six-score',
  templateUrl: './player-six-score.component.html',
  styleUrls: ['./player-six-score.component.css']
})
export class PlayerSixScoreComponent implements OnInit, DoCheck {

  playerSixNameCheck = this.mainService.playerSix.hasName;

  @ViewChild('playerName') playerNameInputRef: ElementRef;
  @ViewChild('playerScore') playerScoreInputRef: ElementRef;

  constructor(private mainService: MainInfo) {}

  checkScore(){
    return this.mainService.playerSix.score;
  }

  updatePlayer(){
    if (this.mainService.playerSix.hasName === false){
      this.changeScore();
      this.setName();
    } else {
      this.changeScore();
    }
  }

  changeScore() {
    this.mainService.playerSix.score += Number(this.playerScoreInputRef.nativeElement.value);
  }

  setName() {
    this.mainService.playerSix.name = this.playerNameInputRef.nativeElement.value;
    this.mainService.playerSix.hasName = true;
  }

  getName() {
    return this.mainService.playerSix.name;
  }

  ngDoCheck(){
    this.playerSixNameCheck = this.mainService.playerSix.hasName;
  }

  ngOnInit() {

  }



}

