import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dmd-dice-roller',
    templateUrl: './dice-roller.component.html',
    styleUrls: ['./dice-roller.component.scss']
})
export class DiceRollerComponent implements OnInit {

    diceCmd: string;

    constructor() { }

    ngOnInit() {
    }

    roll() {
        console.log(this.diceCmd);
    }
}
