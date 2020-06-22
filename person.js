console.log(__dirname, __filename);


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name i ${this.name} and I am ${this.age}`);
  }
}

module.exports = Person;
