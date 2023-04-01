const kibria = {
    id: 101,
    money: 5000,
    name: 'Rj Kibria',
    treatDay: function(expense){
        this.money = this.money - expense ;
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
// kibria.treatDay(100)



const heroTreatDey = kibria.treatDay.bind(heroBalam);
heroTreatDey(500);

const normalTreatDey = kibria.treatDay.bind(normalGolam);