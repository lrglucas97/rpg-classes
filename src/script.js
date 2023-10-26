class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    let attackType;
    switch (this.type) {
      case "Warrior":
        attackType = "used shield bash!";
        break;

      case "Mage":
        attackType = "used magic missiles!";
        break;

      case "Monk":
        attackType = "used martial arts!";
        break;

      case "Ninja":
        attackType = "used stealth stance!";
        break;
      default:
        attackType = "used forbidden techniques!";
        break;
    }
    console.log(`${this.name}, the ${this.age} years old ${this.type} ${attackType}`);
  }
}

const selectedHero = new Hero("Obvurt", 23, "Ninja");

selectedHero.attack()