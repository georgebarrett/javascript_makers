const getNumberSign = (a) => {
    if (a === 0) {
        return "Zero"
    } else if (a < 0) {
        return "Negative"
    } else {
        return "Positive"
    }
};

module.exports = getNumberSign;