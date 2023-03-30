const student = {
    id: 101,
    money: 5000,
    name: 'Rj kibria',
    major: 'mathematics',
    isRich:false,
    subject:['english', 'economics', 'math 101', ' calculus', 'liner' ],
    bestFriend: {
        name: ' kundu',
        major: 'mathematics',
    },
    takeExam: function(){
        console.log(this.name,'taking exam');
    },
    treatDay: function(expense,boksis){
        this.money = this.money - expense - boksis;
        return this.money;
    }
}
/*
for(let i = 0; i<10, i++){}

for(const num of numbers){}// array

for(const prop in student){} // object

*/ 
for(const prop in student){
    // console.log(prop);
    // console.log(property, student[property])
}

const keys = Object.keys(student);

console.log(keys);

for(const property of keys){
    // console.log(property, student[property]);
}


// advance 

const entries = Object.entries(student);
console.log(entries)
for(const[key, value] of Object.entries(student)){
    console.log(key,value);
}