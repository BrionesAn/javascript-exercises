const findTheOldest = function(people) {
// Map over array and create a new array of ages
// Loop over array and return index of oldest person

let ages = people.map( (person) => {
    if (typeof person.yearOfDeath === 'undefined') {
        return (new Date().getFullYear() - person.yearOfBirth);
    }
    return person.yearOfDeath - person.yearOfBirth;
});

let oldestAge = 0;
let oldestIndex = 0;
for (let i = 0; i < ages.length; i++) {
    if (ages[i] > oldestAge) {
        oldestAge = ages[i];
        oldestIndex = i;
    }
}

return people[oldestIndex];

};

// Do not edit below this line
module.exports = findTheOldest;
