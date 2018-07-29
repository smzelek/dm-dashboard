import { Component, OnInit, Input } from '@angular/core';
import { Combatant } from './combatant.model';

@Component({
    selector: 'dmd-combatant',
    templateUrl: './combatant.component.html',
    styleUrls: ['./combatant.component.scss']
})
export class CombatantComponent implements OnInit {

    @Input() combatant: Combatant;
    constructor() { }

    ngOnInit() {
    }

}
