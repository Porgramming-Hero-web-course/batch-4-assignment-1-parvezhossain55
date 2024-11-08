
function sumArray (InputNum:number[]): number {
    const finalSum:number = InputNum.reduce((acc,crrntnValue) => acc+crrntnValue,0)
    return finalSum
}

console.log(sumArray([1,2,100,3]));



