let payload = require('./payload-vaccine.json');

let person = {
   "name" : "Chavalit",
   "lastname" : "Koweerawong",
};
// console.log(``+JSON.stringify(payload));
function combineVaccinePayload(payload, person){
    return JSON.parse(eval("`"+JSON.stringify(payload)+"`"))    
}
let s = combineVaccinePayload(payload, person);

console.log(s);