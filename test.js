const subjects = [
    {sub:'Math',num:56},
    {sub:'english',num:60},
    {sub:'bangla',num:73},
    {sub:'physics',num:58},
    {sub:'biology',num:26},
    {sub:'chemistry',num:52},
]



// max number with subject
// min number with subject;
// average number
// pass and fail subject
// total number

const number = subjects.map(e => e.num);
const highest = Math.max(...number);
const highestObj = subjects.find(e=> e.num == highest);
const lowest = Math.min(...number);
const lowestObj = subjects.find(e=> e.num == lowest);

const totalNumber = number.reduce((a,b) => a+b);
const totalSub = number.length
const average = Math.floor(totalNumber/totalSub);

const pass = subjects.filter(e=>e.num>33)
const fail = subjects.filter(e=>e.num<33)

console.log(number);
console.log(highestObj);
console.log(lowestObj);
console.log(totalNumber)
console.log(average);
console.log(pass);
console.log(fail);

