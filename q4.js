// let a1 = [10,20,30,40,50]
// let a2 = [30,40,50,60,70]
// symmetric difference => not common elements of both array
// [10,20,60,70]




let a1 = [10,20,30,40,50]
let a2 = [30,40,50,60,70]

function findNotCommon(x,y){
    let s2 = new Set(y)
    let arr = []
    for(let t of x){
        if(s2.has(t) == false){
            arr.push(t)
        }
    }
    
    return arr

}


let b1 = findNotCommon(a1,a2)
let b2 = findNotCommon(a2,a1)

console.log([...b1,...b2]) // [10,20,60,70]