

function removeDuplicates (GivenArray : number[]):number[]{

    const resArray:number[] = []

    GivenArray.map((num)=>
    
      {  if(!resArray.includes(num)){
            resArray.push(num)
        }}
    )

    return resArray
}

console.log(removeDuplicates([1,2,3,5,5,3,4]));
