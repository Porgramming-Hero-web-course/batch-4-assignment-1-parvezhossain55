

function countWordOccurrences (sntns:string, wrd:string ):number{
    const lowerCaseSntns:string = sntns.toLocaleLowerCase()
    const lowerCaseWrd:string = wrd.toLocaleLowerCase()

    const sntnsWords = lowerCaseSntns.split(' ')

    const res:number = sntnsWords.filter(wrd=>wrd===lowerCaseWrd).length
    return res




}

