const phoneNumbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'AAAA#####AAAA#87@768767382672',
    '4763687363',
    '4763687363'
];

const longerThanTen = (phoneNumber) => {
    if (phoneNumber >= 10) {
        return true
    } else {
        return false
    }
};

const realPhoneNumbers = phoneNumbers.filter(longerThanTen);

// console.log(realPhoneNumbers);


const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const messages = (names) => {
    return `Hi ${names}! 50% off all records today!`;
}

const generateMessages = names.map(messages);

console.log(generateMessages);


