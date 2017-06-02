import {Component, ElementRef, OnInit, ViewChild, DoCheck} from '@angular/core';
import {MainInfo} from '../shared/main.service';

@Component({
  selector: 'app-player-two-score',
  templateUrl: './player-two-score.component.html',
  styleUrls: ['./player-two-score.component.css']
})
export class PlayerTwoScoreComponent implements OnInit, DoCheck {

  playerTwoNameCheck = this.mainService.playerTwo.hasName;

  @ViewChild('playerName') playerNameInputRef: ElementRef;
  @ViewChild('playerScore') playerScoreInputRef: ElementRef;

  constructor(private mainService: MainInfo) {}

  checkScore(){
    return this.mainService.playerTwo.score;
  }

  updatePlayer(){
    if (this.mainService.playerTwo.hasName === false){
      this.changeScore();
      this.setName();
    } else {
      this.changeScore();
    }
  }

  changeScore() {
    this.mainService.playerTwo.score += Number(this.playerScoreInputRef.nativeElement.value);
  }

  setName() {
    this.mainService.playerTwo.name = this.playerNameInputRef.nativeElement.value;
    this.mainService.playerTwo.hasName = true;
  }

  getName() {
    return this.mainService.playerTwo.name;
  }

  ngDoCheck(){
    this.playerTwoNameCheck = this.mainService.playerTwo.hasName;
  }

  ngOnInit() {

  }



}
