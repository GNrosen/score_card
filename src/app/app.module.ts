import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayerAmountComponent } from './player-amount/player-amount.component';
import { PlayerScoreComponent } from './player-score/player-score.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MainInfo} from './shared/main.service';
import { PlayerTwoScoreComponent } from './player-two-score/player-two-score.component';
import { PlayerThreeScoreComponent } from './player-three-score/player-three-score.component';
import { PlayerFourScoreComponent } from './player-four-score/player-four-score.component';
import { PlayerFiveScoreComponent } from './player-five-score/player-five-score.component';
import { PlayerSixScoreComponent } from './player-six-score/player-six-score.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerAmountComponent,
    PlayerScoreComponent,
    HeaderComponent,
    FooterComponent,
    PlayerTwoScoreComponent,
    PlayerThreeScoreComponent,
    PlayerFourScoreComponent,
    PlayerFiveScoreComponent,
    PlayerSixScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MainInfo],
  bootstrap: [AppComponent]
})
export class AppModule { }
