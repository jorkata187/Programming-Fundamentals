function inventory(arr) {
    let heroRegister = [];

    for (hero of arr) {
        let [name, level, items] = hero.split(" / ")
        let splitItems = items.split(", ")
        let heroObj = { name, level: Number(level), items: splitItems};
        heroRegister.push(heroObj);
    }
    let sortedRegister = heroRegister.sort((a, b) => a.level - b.level)

    for (hero of sortedRegister) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}

inventory(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);