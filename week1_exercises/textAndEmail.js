const notifyByEmail = (email) => {
    return `Email sent to: ${email}`;
};

const notifyByText = (phoneNumber) => {
    return `Text sent to: ${phoneNumber}`;
};

const notify = (string, notifyFunction) => {
    return notifyFunction(string)
};

console.log(notify("0000000", notifyByText))