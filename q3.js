
let a1 = [10,20,30,40,50]
let a2 = [30,40,50,60,70]

let s2 = new Set(a2) //{30,40,50,60,70} // n
let a1a2 = []  // n
for(let t of a1){
      if(s2.has(t) == false){
            a1a2.push(t)
      }
}

console.log(a1a2) // [10,20]