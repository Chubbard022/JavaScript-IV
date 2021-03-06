
    class GameObject {
        constructor(attr){
            this.name = attr.name;
            this.createdAt = attr.createdAt;
            this.dimensions = attr.dimensions;
    }
        destroy(){
            return `${this.name} was removed from the game`;
        }
    }


    class CharacterStats extends GameObject{
        constructor(attr){
            super(attr);
            this.healthPoints = attr.healthPoints;
        }
        takeDamage(){
            return `${this.name} took damage`;
        }
    }

    class Humanoid extends CharacterStats{
        constructor(attr){
            super(attr);
            this.team = attr.team;
            this.weapons = attr.weapons;
            this.language = attr.language;
        }
        greet(){
            return `${this.name} offers a greeting in ${this.language}`;
        }
    }
//----------------------------------------------------------------------------------------------------------------

    const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
    });

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 2,
    height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
    'Giant Sword',
    'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 1,
    width: 2,
    height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
    'Bow',
    'Dagger',
    ],
    language: 'Elvish',
});

    // console.log(mage.createdAt); // Today's date
    // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    // console.log(swordsman.healthPoints); // 15
    // console.log(mage.name); // Bruce
    // console.log(swordsman.team); // The Round Table
    // console.log(mage.weapons); // Staff of Shamalama
    // console.log(archer.language); // Elvish
    // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    // console.log(mage.takeDamage()); // Bruce took damage.
    // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
//----------------------------------------------------------------------------------------------------------------
//---------------------------------------stretch------------------------------------------------------------------

    class Villain extends Humanoid{
        constructor(attr){
            super(attr);
        }
        punch(){
            return `${this.name} punched`;
        }
}
    class Hero extends Humanoid{
        constructor(attr){
            super(attr);
        }
        protect(){
            return `the punch was deflected`;
        }
    }

//======================================
    let superman = new Hero({
        name: 'superman',
        healthPoints: 20
    });
    let batman = new Villain({
        name: 'batman',
        health: 20
    });
//----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------


//console.log(superman);
// console.log(`superman has ${superman.healthPoints} left`);
// console.log(batman.punch());
// console.log(superman.newHealth());
