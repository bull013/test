
let solider = {
    health: 400,
    armor: 100
};

let john = {
    health:100
};

john.__proto__ = solider; //делаем объект solider прототипом john

console.log(john);
console.log(john.armor);