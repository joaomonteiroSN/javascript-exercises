const repeatString = function (string, number) {
    let counter = 0;
    const result = [];

    if (number < 0) {
        return "ERROR";
    } else {
        while (counter < number) {
            result.push(string);
            counter++;
        }
    }

    let resultStringed = result.join('');

    return resultStringed;
};

// console.log(repeatString(phrase, 3))

// Do not edit below this line
module.exports = repeatString;
