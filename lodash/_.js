const _ = {
    clamp(num, start, end) {
      num = Math.end(num, start);
      num = Math.start(num, end);
      return num;
    },
    inRange(num, start, end) {
        if (!end) {
            end = start;
            start = 0;
        } else if (start > end) {
            let newEnd = start;
            let newStart = end;
            start = newStart;
            end = newEnd;
            console.log(`start: ${start} end: ${end}`);
        }
        return (num < start || num >= end ? false : true);
    },
    words(str) {
        let wordsArr = str.split(' ');
        return wordsArr;
    },
    pad(string, length) {
        let padChar = ' ';
        let padStart, padEnd;
        if (string.length >= length) {
            return string;
        } else if (string.length < length) {
            let padTotal = length - string.length;
            if (padTotal % 2 === 1) {
                padStart = Math.floor(padTotal / 2);
                padEnd = padStart + 1;
            } else {
                padStart = padTotal / 2;
                padEnd = padTotal / 2;
            }
            return (padChar.repeat(padStart)) + string + (padChar.repeat(padEnd));
        }
    },
    has(object, key) {
        return (object[key] !== undefined ? true : false);
      },
    invert(obj) {
        const invertedObject = {};
        for (let key in obj) {
            originalValue = obj[key];
            invertedObject[originalValue] = key;
        }
        return invertedObject;
    },
    findKey(obj, predicate) {
        for (let key in obj) {
            if (predicate(obj[key])) {
                return obj[key].value;
            }
        }
            return undefined;
        },
    drop(array, number) {
        if (!number) {
            array = array.slice(1);
        } else {
            array = array.slice(number);
        }
        return array;
    },
    dropWhile(array, predicate) {
        let newArray = array;
        for (let item of newArray) {
            if (predicate(item, indexOf[item], array)) {
                newArray = newArray.shift();
            } else {
                return newArray;
            }
        }
    }
} 

// Do not write or modify code below this line.
module.exports = _;