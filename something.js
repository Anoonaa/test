// 1. Base Class: Animal
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// 2. Subclass: Mammal
class Mammal extends Animal {
  constructor(name, age, warmblooded) {
    super(name, age);
    this.warmblooded = warmblooded;
  }

  feeds(type) {
    console.log(`${this.name} is a ${type} eater.`);
  }
}

// 3. Subclass: Dog
class Dog extends Mammal {
  constructor(name, age, warmblooded, breed) {
    super(name, age, warmblooded);
    this.breed = breed;
  }

  describe() {
    console.log(`${this.name} is a ${this.age}-year-old ${this.breed} dog.`);
  }
}

// 4. Subclass: Bird
class Bird extends Animal {
  constructor(name, age, wingspan) {
    super(name, age);
    this.wingspan = wingspan; // in cm
  }

  hatchEggs(period) {
    console.log(`${this.name} hatches eggs in about ${period} days.`);
  }
}

// 5. Subclass: Parrot
class Parrot extends Bird {
  constructor(name, age, wingspan, canTalk) {
    super(name, age, wingspan);
    this.canTalk = canTalk;
  }

  speaks(words) {
    if (this.canTalk) {
      console.log(`${this.name} says: "${words}"`);
    } else {
      console.log(`${this.name} cannot talk.`);
    }
  }
}

// 6. Create Instances
const dog1 = new Dog("Rex", 5, true, "German Shepherd");
const dog2 = new Dog("Bella", 3, true, "Labrador");

const parrot1 = new Parrot("Polly", 2, 25, true);
const parrot2 = new Parrot("Coco", 4, 30, false);

// Call functions on the instances
dog1.feeds("meat");
dog1.describe();

dog2.feeds("kibble");
dog2.describe();

parrot1.hatchEggs(21);
parrot1.speaks("Hello! I’m a smart parrot.");

parrot2.hatchEggs(23);
parrot2.speaks("I wish I could talk!");

// 7. Home class
class Home {
  constructor() {
    this.pets = [];
  }

  addPets(pet) {
    this.pets.push(pet);
    console.log(`${pet.name} has been added to the home.`);
  }

  listPets() {
    console.log("Listing all pets in the home:");
    this.pets.forEach((pet, index) => {
      console.log(`${index + 1}. ${pet.name} (${pet.constructor.name})`);
    });
  }
}

// Create a Home and add pets
const myHome = new Home();
myHome.addPets(dog1);
myHome.addPets(dog2);
myHome.addPets(parrot1);
myHome.addPets(parrot2);
myHome.listPets();
