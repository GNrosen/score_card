import {Component, DoCheck, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MainInfo} from '../shared/main.service';

@Component({
  selector: 'app-player-three-score',
  templateUrl: './player-three-score.component.html',
  styleUrls: ['./player-three-score.component.css']
})
export class PlayerThreeScoreComponent implements OnInit, DoCheck {

  playerThreeNameCheck = this.mainService.playerThree.hasName;

  @ViewChild('playerName') playerNameInputRef: ElementRef;
  @ViewChild('playerScore') playerScoreInputRef: ElementRef;

  constructor(private mainService: MainInfo) {}

  checkScore(){
    return this.mainService.playerThree.score;
  }

  updatePlayer(){
    if (this.mainService.playerThree.hasName === false){
      this.changeScore();
      this.setName();
    } else {
      this.changeScore();
    }
  }

  changeScore() {
    this.mainService.playerThree.score += Number(this.playerScoreInputRef.nativeElement.value);
  }

  setName() {
    this.mainService.playerThree.name = this.playerNameInputRef.nativeElement.value;
    this.mainService.playerThree.hasName = true;
  }

  getName() {
    return this.mainService.playerThree.name;
  }

  ngDoCheck(){
    this.playerThreeNameCheck = this.mainService.playerThree.hasName;
  }

  ngOnInit() {

  }



}
