import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MainInfo} from '../shared/main.service';

@Component({
  selector: 'app-player-amount',
  templateUrl: './player-amount.component.html',
  styleUrls: ['./player-amount.component.css']
})
export class PlayerAmountComponent implements OnInit {

  @ViewChild('numberOfPlayers') numberOfPlayersInputRef: ElementRef;

  constructor(private mainService: MainInfo) { }

  submitNumberOfPlayers() {
    console.log('The number of players in this round is ' + this.numberOfPlayersInputRef.nativeElement.value + '.');
    this.mainService.numberOfPlayers = this.numberOfPlayersInputRef.nativeElement.value;
  }


  ngOnInit() {
  }

}
