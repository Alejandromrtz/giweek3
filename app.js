//easy mode
let exercise = (x) => {
    let exercising = () => {
        return(`Today's exercise is : ${x}`);
    }
    return exercising;
}

var run = exercise('running');
console.log(run());

var swim = exercise('swimming');
console.log(swim());



//  MEDIUM

let cutPizzaSlices = (x) => {
        let sharedSlices = (y) => {
            var total = (`${(x / y).toFixed(2)}`);

            return(`Each Person gets ${total} slices of pizza.`)
        }
        return sharedSlices;
}
var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));
//prints "Each Person gets 4.00 slices of pizza"
console.log(sharePizza(3));
//prints "each person gets 2.67 slices of pizza"


//hard mode fr
class Userinfo {
    #ssn;
    //properties
    constructor(name){
        this.#ssn = 921224393; //private
        this.name = name; //public
    }
}

class Username extends Userinfo{
    constructor(name){
        super(name);
    }
    test() {
// ssn is not accessible through this function & class.
// remove this.#ssn to make it work.
        // console.log(this.name, this.#ssn);
        console.log(this.name);
    }
}

let piii = new Username('Alex');
piii.test();







// very hard 
//  4. Create a Programmer constructor that inherits all the members from Person with an additional
// 'languages' property that is passed in and a busy property that is NOT passed in and is set to
// true by default.


// 5. Give the Programmer a 'completeTask' method that updates the busy property on that
// programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the
// busy property on that programmer to be true.


// 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the
// programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't
// accept any new tasks right now." and "Mark would love to take on a new responsibility." if the
// programmer is not busy.


// 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages
// to the programmer and list off all languages the programmer knows.

 class Person {
     constructor (name, job, age) {
         this.name = name;
         this.job = job;
         this.age = age;
     }
     exercise = () => {
         return ('Running is fun!- said me.');
     };
     fetchJob = () => {
         return (`${this.name} will become a ${this.job} at ${this.age} years old.`);
     };
 }

 class Programmer extends Person{
    constructor(name, job, age, language){
        super(name, job, age);
        this.languages = [language];
        this.busy = true;
    }
    completeTask = () => {
        this.busy = false;
    }
    acceptNewTask = () => {
        this.busy = true;
    }
    offerNewTask = () => {
        if (this.busy) {
            console.log('We are too busy to accept any quest');
        } else {
           console.log('Bring it on!');
        }
    }
    learnLanguage = (language) => {
         this.languages.push(language);
        }
    listLanguages = () => {
        console.log(`${this.name} knows ${this.languages.toString()}.`);
         }
 }
 let ale = new Programmer('Alejandro', 'Full-stack Dev', 20 ,'Javascript');
 ale.fetchJob()
 ale.learnLanguage("C++");
 ale.learnLanguage("Java");
 ale.listLanguages();



