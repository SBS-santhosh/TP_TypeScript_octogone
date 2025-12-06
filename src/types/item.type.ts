export type ItemModifier = 'health' | 'attackSpeed' | 'attackDamage';

export interface Item {
    name: string;
    modifier: ItemModifier;
    pints: number;
}
