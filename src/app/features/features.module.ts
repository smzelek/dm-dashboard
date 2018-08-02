import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombatPanelComponent } from './combat-panel/combat-panel.component';
import { CombatantComponent } from './combat-panel/combatant/combatant.component';
import { CombatantGroupComponent } from './combat-panel/combatant-group/combatant-group.component';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CombatPanelComponent,
        DiceRollerComponent
    ],
    declarations: [
        CombatPanelComponent,
        CombatantComponent,
        CombatantGroupComponent,
        DiceRollerComponent
    ]
})
export class FeaturesModule { }
