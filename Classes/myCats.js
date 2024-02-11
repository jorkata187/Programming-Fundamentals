function myCats(catsAsSrings) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = catsAsSrings.map(catsAsSring => {
        let tokens = catsAsSring.split(' ');
        let name = tokens[0];
        let age = Number(tokens[1]);

        return new Cat(name, age);
    })

    for (let cat of cats) {
        cat.meow();
    }
}

myCats(['Candy 1', 'Poppy 3']);