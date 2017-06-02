import {Component, DoCheck, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MainInfo} from '../shared/main.service';



@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.css']
})
export class PlayerScoreComponent implements OnInit, DoCheck {

  playerOneNameCheck = this.mainService.playerOne.hasName;

  @ViewChild('playerName') playerNameInputRef: ElementRef;
  @ViewChild('playerScore') playerScoreInputRef: ElementRef;

  constructor(private mainService: MainInfo) {}

  checkScore(){
    return this.mainService.playerOne.score;
  }

  updatePlayer(){
    if (this.mainService.playerOne.hasName === false){
      this.changeScore();
      this.setName();
    } else {
      this.changeScore();
    }
  }

  changeScore() {
    this.mainService.playerOne.score += Number(this.playerScoreInputRef.nativeElement.value);
  }

  setName() {
    this.mainService.playerOne.name = this.playerNameInputRef.nativeElement.value;
    this.mainService.playerOne.hasName = true;
  }

  getName() {
    return this.mainService.playerOne.name;
  }

  ngDoCheck(){
    this.playerOneNameCheck = this.mainService.playerOne.hasName;
  }

  ngOnInit() {

  }



}
