import { Component, OnInit } from '@angular/core';
import { Combatant } from './combatant/combatant.model';

@Component({
    selector: 'dmd-combat-panel',
    templateUrl: './combat-panel.component.html',
    styleUrls: ['./combat-panel.component.scss']
})
export class CombatPanelComponent implements OnInit {

    combatants: Array<Combatant>;

    constructor() {
        this.combatants = new Array<Combatant>();
        const ferry = <Combatant>{
            name: 'Ferry',
            maxHP: 100,
            currentHP: 50
        };
        const mrPercival = <Combatant>{
            name: 'Mr. Percival',
            maxHP: 50,
            currentHP: 10
        };

        this.combatants.push(ferry, mrPercival);
    }

    ngOnInit() {
    }

}
