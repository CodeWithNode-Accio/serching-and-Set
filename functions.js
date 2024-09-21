

// function hello(a,b){ // a = 10, b = 20
//    console.log(a+b)
// }


// // hello(10,20) // 30

// let x = 10 
// let y = 20

// hello(x,y) 


// function modify(a){
// console.log("received", a)
//   a = 100 
//   console.log("Inside modify", a)
// }


// let a = 50 
// modify(a)
// console.log("Outside modify", a)





// let a = 10  // a-outer


// for(let i = 1; i<=1; i++){
//     // let a => hoisiting
//     // console.log("inside 1",a)

//     let a = 20  // a-inner

//     console.log("inside 2",a)  // 20
// }

// console.log("outside",a)



// let count = 0

// for(let i = 1; i<=10; i++){
//     count = count + 1
// }   

// console.log(count) // 10



// let a = 10 // a outer

// function hello(a){ // a inner
//     console.log("inside 1",a) // 50
//     a = 20 // inner a
//     console.log("inside 2",a) //20
// }

// hello(a*5) // a outer

// console.log("outer",a)

//let arr

// function modify(brr){ // 1000th
//     console.log("received", brr)
//     brr[0] = 100
//     console.log("Inside modify", brr)
//   }

//   modify(arr)
//   let arr = [10,20,30,40,50] // 1000th

  

//   console.log("Outside modify", arr)


function modify(a){ // 1000th
    console.log("received", a)
    a = 100
    console.log("Inside modify", a)
  }

 
  let a = 10 // 1000th
  modify(a)

  

  console.log("Outside modify", a)