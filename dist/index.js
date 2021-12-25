"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
function getStatistics(marks) {
    const avgMark = marks.reduce((prv, cur) => prv + cur.avgMark, 0) / marks.length;
    const highestMark = marks.reduce((prv, cur) => { return (prv.avgMark > cur.avgMark) ? prv : cur; }).name;
    const lowestMark = marks.reduce((prv, cur) => { return (prv.avgMark < cur.avgMark) ? prv : cur; }).name;
    const resObj = {
        avgMark,
        highestMark,
        lowestMark
    };
    return resObj;
}
console.log(getStatistics(data_1.testMarks));
