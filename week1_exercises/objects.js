const person = {
    name: 'Maxine',
    age: 32,
    address: {
      city: 'London',
      postcode: 'E1 123'
    },
    hobbies: ['writing', 'tennis', 'cooking']
  };

// console.log(person.address.city)
// console.log(person.hobbies[1])

const cohort = {
    name: 'April2023',
    id: 11,
    studentNames: ["blah", "meh", "whatever"],
};

const cohortFunction = (cohort) => {
    return `${cohort.id}, ${cohort.name}, ${cohort.studentNames.length} in this cohort.`
}

console.log(cohortFunction(cohort))