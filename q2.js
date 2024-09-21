let a1 = [10,20,30,40,50]
let a2 = [30,40,50,60,70]

let s2 = new Set(a2) //{30,40,50,60,70} // n
let intersection = []  // n
for(let t of a1){
    // t = 10,20,30,40,50
   if(s2.has(t) == true){
         intersection.push(t)
   }
}

console.log(intersection) // [30,40,50]


// space => O(n)
// time => O(n)