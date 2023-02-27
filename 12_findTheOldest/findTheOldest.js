
const findTheOldest = function(people) {
    const date = new Date();
    for(person of people){
        if(!person.yearOfDeath) person.yearOfDeath = date.getFullYear();
    }
    const ages = people.sort(function(person1,person2){
        const person1Age = person1.yearOfDeath - person1.yearOfBirth;
        const person2Age = person2.yearOfDeath - person2.yearOfBirth;
        return person1Age > person2Age ? -1 : 1;
    });
    return ages[0];
    
};

module.exports = findTheOldest;
