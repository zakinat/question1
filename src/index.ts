import {Student,Statistics} from './types'
import { testMarks } from './data'

function getStatistics(marks: Student[]): Statistics{
    const avgMark=marks.reduce((prv, cur)=>prv+cur.avgMark,0)/marks.length;
    const highestMark=marks.reduce((prv, cur)=> (prv.avgMark > cur.avgMark)? prv: cur).name;
    const lowestMark=marks.reduce((prv, cur)=> (prv.avgMark < cur.avgMark)? prv: cur).name;
    const resObj={
        avgMark,
        highestMark,
        lowestMark
    }

return resObj
}

console.log(getStatistics(testMarks))