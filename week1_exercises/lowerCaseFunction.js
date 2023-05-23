const lowercaseMessage = (message) => {
    return message.toLowerCase();
};

// console.log(lowercaseMessage("AAAAAAHHHHHHHHH"));

const transform = (message, transformFunction) => {   
    return transformFunction(message);
};

console.log(transform('SHOUTING', lowercaseMessage));