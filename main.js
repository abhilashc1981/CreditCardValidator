// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

const stringToArray = string => {
    let arrayOfNumbers = [];
    for (let i = 0; i < string.length; i++) {
        arrayOfNumbers[i] = parseInt(string[i]);
    }
    return arrayOfNumbers;
}

const cards = ['4120753727780034', '4716340396071448', '4485223977316305472', '5398459300670533', '5379108921015981', '5315209819964574', '342735388087585', '348295537480920', '342754094669164', '6011920842901665', '6011662236062478', 
    '6011599070147755343', '3529828164818890', '3539116991714120', '3539572342307924884', '5539733696532782', '5576620179701048', '30573559787528', '30207958824448', '30157424120600', '36706849435987', '36560653392267', '36553949871400', 
    '6761999245720585', '6304494660170601', '5018703885519593', '4026387705563578', '4913946494760913', '4917060549234241', '6375336029585082', '6385087730094942', '6386952680871624'];



// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];
 
const invalidBatch = [invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery3, mystery4];

/*for (let i = 0; i < cards.length; i++) {
    batch.push(stringToArray(cards[i]));
} */
//console.log(batch);

const validateCred = array => {
    let testArray = [];
    let arrayLength = array.length;
    for (let i = arrayLength - 1; i >= 0; i--) {
        if (arrayLength %2 === 0) {
            if (i % 2 !== 0) {
                testArray[i] = array[i];
            }
            else {
                testArray[i] = array[i] * 2;
                if (testArray[i] > 9) {
                    testArray[i] -= 9;
                }
            }
        }
        else {
            if (i % 2 === 0) {
                testArray[i] = array[i];
            }
            else {
                testArray[i] = array[i] * 2;
                if (testArray[i] > 9) {
                    testArray[i] -= 9;
                }
            }
        }
    }
    console.log(testArray);
    let sum = 0;
    for (let i = 0; i < testArray.length; i++) {
        sum += testArray[i];
    }
    console.log(sum);
    if (sum % 10 === 0) {
        return true;
    }
    else {
        return false;
    }
}

for (let i = 0; i < batch.length; i++) {
    //console.log(validateCred(batch[i]));
}

const findInvalidCards = nestedArray => {
    let status = false;
    let invalidArray = [];
    for (let i = 0; i < nestedArray.length; i++) {
       status = validateCred(nestedArray[i]);
       if (!status) {
        invalidArray.push(nestedArray[i]);
       }
    }
    return invalidArray;
}

//console.log(findInvalidCards(batch));

const idInvalidCardCompanies = invalidCards => {
    let companies = [];
    for (let i = 0; i < invalidCards.length; i++) {
        switch(invalidCards[i][0]) {
            case 3:
                if (companies.indexOf('Amex (American Express)') === -1) {
                    companies.push('Amex (American Express)');
                }
                break;
            case 4:
                if (companies.indexOf('Visa') === -1) {
                    companies.push('Visa');
                }
                break;
            case 5:
                if (companies.indexOf('Mastercard') === -1) {
                    companies.push('Mastercard');
                }
                break;
            case 6:
                if (companies.indexOf('Discover') === -1) {
                    companies.push('Discover');
                }
                break;
            default:
                console.log('Company not found');
        }
    }
    return companies;
}

//console.log(idInvalidCardCompanies(findInvalidCards(batch)));

const invalidToValid = invalidNestedArray => {
    let validCards = [];
    for (let j = 0; j < invalidNestedArray.length; j++) {
        let testArray = [];
        let arrayLength = invalidNestedArray[j].length;
        for (let i = arrayLength - 1; i >= 0; i--) {
            if (arrayLength %2 === 0) {
                if (i % 2 !== 0) {
                    testArray[i] = invalidNestedArray[j][i];
                }
                else {
                    testArray[i] = invalidNestedArray[j][i] * 2;
                    if (testArray[i] > 9) {
                        testArray[i] -= 9;
                    }
                }
            }
            else {
                if (i % 2 === 0) {
                    testArray[i] = invalidNestedArray[j][i];
                }
                else {
                    testArray[i] = invalidNestedArray[j][i] * 2;
                    if (testArray[i] > 9) {
                        testArray[i] -= 9;
                    }
                }
            }
        }
        //console.log(testArray);
        let sum = 0;
        const testArrayLength = testArray.length;
        for (let i = 0; i < testArrayLength; i++) {
            sum += testArray[i];
        }
        //console.log(sum);
        if (sum % 10 === 0) {
            return [];
        }
        else {
            switch (sum % 10) {
                case 9:
                    if (testArray[testArrayLength - 2] % 2 !== 0) {
                        testArray[testArrayLength - 2] += 1;
                        if (testArray[testArrayLength - 2] === 10) {
                            testArray[testArrayLength - 2] -= 10;
                        }
                    }
                    else {
                        testArray[testArrayLength - 3] += 1;
                        if (testArray[testArrayLength - 3] === 10) {
                            testArray[testArrayLength - 3] -= 10;
                        }
                    }
                    break;
                case 8:
                    if (testArray[testArrayLength - 2] % 2 === 0) {
                        testArray[testArrayLength - 2] += 2;
                        if (testArray[testArrayLength - 2] === 10) {
                            testArray[testArrayLength - 2] -= 10;
                        }
                    }
                    else {
                        testArray[testArrayLength - 2] += 1;
                        if (testArray[testArrayLength - 2] === 10) {
                            testArray[testArrayLength - 2] -= 10;
                        }
                        testArray[testArrayLength - 3] += 1;
                        if (testArray[testArrayLength - 3] === 10) {
                            testArray[testArrayLength - 3] -= 10;
                        }
                    }
                    break;
                case 7:
                    if (testArray[testArrayLength - 2] % 2 === 0) {
                        testArray[testArrayLength - 2] += 2;
                        if (testArray[testArrayLength - 2] === 10) {
                            testArray[testArrayLength - 2] -= 10;
                        }
                        testArray[testArrayLength - 3] += 1;
                        if (testArray[testArrayLength - 3] === 10) {
                            testArray[testArrayLength - 3] -= 10;
                        }
                    }
                    else {
                        testArray[testArrayLength - 2] += 1;
                        if (testArray[testArrayLength - 2] === 10) {
                            testArray[testArrayLength - 2] -= 10;
                        }
                        testArray[testArrayLength - 3] += 2;
                        if (testArray[testArrayLength - 3] > 10) {
                            testArray[testArrayLength - 3] -= 10;
                        }
                    }
                    break;
                case 6:
                    if (testArray[testArrayLength - 2] % 2 === 0) {
                        testArray[testArrayLength - 2] += 4;
                        if (testArray[testArrayLength - 2] >= 10) {
                            testArray[testArrayLength - 2] -= 10;
                        }
                    }
                    else {
                        testArray[testArrayLength - 2] += 3;
                        if (testArray[testArrayLength - 2] >= 10) {
                            testArray[testArrayLength - 2] -= 10;
                        }
                        testArray[testArrayLength - 3] += 1;
                        if (testArray[testArrayLength - 3] === 10) {
                            testArray[testArrayLength - 3] -= 10;
                        }
                    }
                    break;
                case 5:
                    if (testArray[testArrayLength - 2] % 2 === 0) {
                        testArray[testArrayLength - 2] += 4;
                        if (testArray[testArrayLength - 2] >= 10) {
                            testArray[testArrayLength - 2] -= 10;
                        }
                        testArray[testArrayLength - 3] += 1;
                        if (testArray[testArrayLength - 3] === 10) {
                            testArray[testArrayLength - 3] -= 10;
                        }
                    }
                    else {
                        testArray[testArrayLength - 2] += 3;
                        if (testArray[testArrayLength - 2] >= 10) {
                            testArray[testArrayLength - 2] -= 10;
                        }
                        testArray[testArrayLength - 3] += 2;
                        if (testArray[testArrayLength - 3] >= 10) {
                            testArray[testArrayLength - 3] -= 10;
                        }
                    }
                    break;
                case 4:
                    if (testArray[testArrayLength - 2] % 2 === 0) {
                        testArray[testArrayLength - 2] += 6;
                        if (testArray[testArrayLength - 2] >= 10) {
                            testArray[testArrayLength - 2] -= 10;
                        }
                    }
                    else {
                        testArray[testArrayLength - 2] += 5;
                        if (testArray[testArrayLength - 2] >= 10) {
                            testArray[testArrayLength - 2] -= 10;
                        }
                        testArray[testArrayLength - 3] += 1;
                        if (testArray[testArrayLength - 3] === 10) {
                            testArray[testArrayLength - 3] -= 10;
                        }
                    }
                    break;
                case 3:
                    if (testArray[testArrayLength - 2] % 2 === 0) {
                        testArray[testArrayLength - 2] += 6;
                        if (testArray[testArrayLength - 2] >= 10) {
                            testArray[testArrayLength - 2] -= 10;
                        }
                        testArray[testArrayLength - 3] += 1;
                        if (testArray[testArrayLength - 3] === 10) {
                            testArray[testArrayLength - 3] -= 10;
                        }
                    }
                    else {
                        testArray[testArrayLength - 2] += 5;
                        if (testArray[testArrayLength - 2] >= 10) {
                            testArray[testArrayLength - 2] -= 10;
                        }
                        testArray[testArrayLength - 3] += 2;
                        if (testArray[testArrayLength - 3] >= 10) {
                            testArray[testArrayLength - 3] -= 10;
                        }
                    }
                    break;
                case 2:
                    if (testArray[testArrayLength - 2] % 2 === 0) {
                        testArray[testArrayLength - 2] += 8;
                        if (testArray[testArrayLength - 2] >= 10) {
                            testArray[testArrayLength - 2] -= 10;
                        }
                    }
                    else {
                        testArray[testArrayLength - 2] += 7;
                        if (testArray[testArrayLength - 2] >= 10) {
                            testArray[testArrayLength - 2] -= 10;
                        }
                        testArray[testArrayLength - 3] += 1;
                        if (testArray[testArrayLength - 3] === 10) {
                            testArray[testArrayLength - 3] -= 10;
                        }
                    }
                    break;
                case 1:
                    if (testArray[testArrayLength - 2] % 2 === 0) {
                        testArray[testArrayLength - 2] += 8;
                        if (testArray[testArrayLength - 2] >= 10) {
                            testArray[testArrayLength - 2] -= 10;
                        }
                        testArray[testArrayLength - 3] += 1;
                        if (testArray[testArrayLength - 3] === 10) {
                            testArray[testArrayLength - 3] -= 10;
                        }
                    }
                    else {
                        testArray[testArrayLength - 2] += 9;
                        if (testArray[testArrayLength - 2] >= 10) {
                            testArray[testArrayLength - 2] -= 10;
                        }
                    }
                    break;
            }
        }
        for (let i = testArrayLength - 1; i >= 0; i--) {
            if (i !== testArrayLength - 1) {//if not check digit
                if (testArrayLength %2 === 0) {//if credit card has even number of digits, say, 16 digits
                    if (i % 2 === 0) { //even index elements - alternate elements to the left of check digit
                        if (testArray[i] %2 !== 0) {//if alternate element is odd, 9 was subtracted from it; so must be added back
                            testArray[i] += 9;
                        }
                        testArray[i] /= 2;//alternate elements to the left of the check digit were doubled; so need to be halved
                    }
                }
                else {//if credit card has odd number of digits, say, 15 digits
                    if (i % 2 !== 0) {//alternate digits to the left of check digit whose index is odd
                        if (testArray[i] %2 !== 0) {//if the element is odd, 9 was subtracted from it and must be added back
                            testArray[i] += 9;
                        }
                        testArray[i] /= 2;//alternate elements to the left of check digit were doubled; so, must be halved
                    }
                }
            }  
        }
        validCards.push(testArray);
        //console.log(testArray);
    }
    return validCards;
}

//console.log(invalidBatch);
let validCards = invalidToValid(invalidBatch);
//console.log(validCards);
//validateCred(validCards);


for (let i = 0; i < validCards.length; i++) {
    validateCred(validCards[i]);
}





