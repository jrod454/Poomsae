import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Poomsae';

  heightJump: number = 0;
  numJumpKicks: number = 0;
  turnGradient: number = 0;
  kickPerformance: number = 0;
  acrobatic: number = 0;
  basicMovement: number = 0;
  creativeness: number = 0;
  harmony: number = 0;
  energyExp: number = 0;
  music: number = 0;

  deductions: number = 0;

  techScore() {
    return this.heightJump + this.numJumpKicks + this.turnGradient + this.kickPerformance + this.acrobatic + this.basicMovement;
  }

  presScore() {
    return this.creativeness + this.harmony + this.energyExp + this.music;
  }

  totalScore() {
    return this.techScore() + this.presScore() + this.deductions;
  }
}
