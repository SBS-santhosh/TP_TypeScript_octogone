import { Action } from "../types/action.type";
import { getRandomInt } from "../helpers/random-int.helper";
import { Item } from "../types/item.type";

export abstract class Character {
    name: string;
    health: number;
    attackSpeed: number;
    possibleActions: Action[];
    isDefending: boolean = false;
    inventory: Item[] = [];
    damageBonus: number = 0;

    constructor(name: string, health: number, attackSpeed: number, possibleActions: Action[]) {
        this.name = name;
        this.health = health;
        this.attackSpeed = attackSpeed;
        this.possibleActions = possibleActions;
    }

    equip(item: Item): void {
        this.inventory.push(item);
        console.log(`${this.name} s'équipe de "${item.name}" (+${item.pints} ${item.modifier})`);

        switch (item.modifier) {
            case 'health':
                this.health += item.pints;
                break;
            case 'attackSpeed':
                this.attackSpeed += item.pints;
                break;
            case 'attackDamage':
                this.damageBonus += item.pints;
                break;
        }
    }

    takeDamage(amount: number): void {
        if (this.isDefending) {
            console.log(`🛡️ ${this.name} bloque une attaque de ${amount} points de dégâts !`);
            this.isDefending = false;
            return;
        }

        this.health -= amount;
        console.log(`${this.name} a pris ${amount} points de dégâts`);

        if (this.health <= 0) {
            this.health = 0;
            console.log(`💀 ${this.name} est vaincu`);
        } else {
            console.log(`${this.name} a ${this.health} points de vie restants`);
        }
    }

    performTurn(target: Character): void {
        if (this.possibleActions.length === 0) {
            return;
        }

        const index = getRandomInt(0, this.possibleActions.length - 1);
        const action = this.possibleActions[index];

        if (action.type === 'defense') {
            this.isDefending = true;
            console.log(`${this.name} utilise "${action.name}" et se protège !`);
            return;
        }

        if (action.type === 'attack') {
            let min = action.minDamage || 0;
            let max = action.maxDamage && action.maxDamage >= min ? action.maxDamage : min;

            const damage = getRandomInt(min, max) + this.damageBonus;

            console.log(`${this.name} utilise "${action.name}" sur ${target.name} !`);
            target.takeDamage(damage);
        }
    }
}
