const hero = {
    name: "Thor",
    team: "Vingadores",
    power: 98,
    weapons: ["Stormbreaker", "Mjolnir"],
    origin: {planet: "Asgard"}
}
//lendo
hero.name  //notação de ponto
console.log(hero.name);

hero["team"] //notação de colchetes
console.log(hero["team"]);

hero.origin.planet //obj dentro de obj
console.log(hero.origin.planet);

hero.weapons[0] //array dentro do obj
console.log(hero.weapons[0]);

const key = "power" //colchetes aceitam variavel
hero[key]

hero.age //undefined -> não existe
console.log(hero.age)

//Alterado, adicionado e removendo

hero.power = 99
console.log(hero);

hero.nickname = "Deus do Trovão"
console.log(hero);

delete hero.nickname
console.log(hero);

// Percorrendo um objeto

for (const prop in hero) {
    console.log(`${prop}:`, hero[prop]);
}

Object.keys(hero) // lista de chaves
Object.values(hero) // lista de valores

// Desestruturação
const { name, team } = hero 
console.log(name, team);


// método

const villain = {
    name: "Doutor Destino",
    power: 500,
    attack(target) {
        retur `${this.name} atacou ${target}!`
    },
    powerUp(amout) {
        this.power += amout
        return this.power
    }
}

console.log(villain.attack("Thor"))
console.log(villain.power(50))

// referencia x copia

const ref = hero
ref.power = 1

console.log(hero.power);