import { Warrior } from "./models/warrior";
import { Mage } from "./models/mage";
import { determineAttackOrder } from "./helpers/determine-attack-order.helper";

import { ITEMS } from "./constants/items.constants";

const booba = new Warrior("Booba");
const kaaris = new Mage("Kaaris");

// Equip items
booba.equip(ITEMS[0]); // Épée de Brodard (+4 Dmg)
kaaris.equip(ITEMS[4]); // Mise à jour Windows (+8 Dmg)


console.log(`${booba.name} (Warrior) vs ${kaaris.name} (Mage) - FIGHT!`);

while (booba.health > 0 && kaaris.health > 0) {
    const { first, second } = determineAttackOrder(booba, kaaris);

    console.log(`\n🚦 ${first.name} attaque en premier !`);

    first.performTurn(second);

    if (second.health > 0) {
        second.performTurn(first);
    }
}

const winner = booba.health > 0 ? booba : kaaris;
console.log(`\n🏆 Le vainqueur est ${winner.name} !`);
