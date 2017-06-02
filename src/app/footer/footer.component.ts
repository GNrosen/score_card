import { Component, OnInit } from '@angular/core';
import {MainInfo} from '../shared/main.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private mainService: MainInfo) { }

  resetAll(){
    this.mainService.numberOfPlayers = 0;

    this.mainService.playerOne.name = null;
    this.mainService.playerOne.score = 0;
    this.mainService.playerOne.hasName = false;

    this.mainService.playerTwo.name = null;
    this.mainService.playerTwo.score = 0;
    this.mainService.playerTwo.hasName = false;

    this.mainService.playerThree.name = null;
    this.mainService.playerThree.score = 0;
    this.mainService.playerThree.hasName = false;

    this.mainService.playerFour.name = null;
    this.mainService.playerFour.score = 0;
    this.mainService.playerFour.hasName = false;

    this.mainService.playerFive.name = null;
    this.mainService.playerFive.score = 0;
    this.mainService.playerFive.hasName = false;

    this.mainService.playerSix.name = null;
    this.mainService.playerSix.score = 0;
    this.mainService.playerSix.hasName = false;


  }

  ngOnInit() {
  }

}
