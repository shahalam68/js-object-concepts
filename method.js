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

student.takeExam();

const remaining1= student.treatDay(900,20);
const remaining2= student.treatDay(500,10);
console.log(remaining2);