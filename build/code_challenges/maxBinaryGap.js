"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maxBinaryGap = (value) => {
    const binaryStr = Number(value).toString(2);
    let count = 0;
    let maxCount = 0;
    for (let i = 0; i < binaryStr.length; i++) {
        if (binaryStr[i] === '1' && count > maxCount) {
            maxCount = count;
        }
        if (i >= 1 && binaryStr[i - 1] === '1' && binaryStr[i] === '0') {
            count = 1;
        }
        else if (count > 0 && binaryStr[i] === '0' && i < binaryStr.length) {
            count++;
        }
    }
    return maxCount;
};
exports.default = maxBinaryGap;
