const kibria = {
    id: 101,
    money: 5000,
    name: 'Rj Kibria',
    treatDay: function(expense, bokshis,tax){
        this.money = this.money - expense - bokshis -tax;
        console.log(this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 6000,
    name:'Hero Balam'
}

const normalGolam = {
    id: 102,
    money: 8000,
    name:'Normal Golam'
}

kibria.treatDay.call(heroBalam, 500, 100,25);
kibria.treatDay.call(heroBalam, 300,50,15);