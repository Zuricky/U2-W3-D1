// ESERCIZIO 1
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
    }
  }
}

const userX = new User("Willy", "Branchi", 19, "Ravenna");
const userY = new User("Luca", "Terzo", 20, "Vicenza");

console.log(userX.compareAge(userY));

// ESERCIZIO 2
const pets = [];

class Pet {
  constructor(petName, owner, species, breed) {
    this.petName = petName;
    this.owner = owner;
    this.species = species;
    this.breed = breed;
  }
}

const formShop = document.getElementById("formShop");

formShop.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const ownerInput = document.getElementById("ownerName");
  const speciesInput = document.getElementById("species");
  const breedInput = document.getElementById("breed");
  const newPet = new Pet(nameInput.value, ownerInput.value, speciesInput.value, breedInput.value);

  pets.push(newPet);

  console.log(newPet);
  console.log(pets);
});
