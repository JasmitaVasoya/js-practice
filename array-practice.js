
// problem 1
const arr1 = [1,2,3,2,4,3]
const newArr1 = []
arr1.forEach((el)=>{
    if(!newArr1.includes(el))
    newArr1.push(el)
})

// optimise
const newArr = [...new Set(arr1)]

// problem 2
const lettersArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const arr2 = ['a','b','c','d','u']

const newArr2 = arr2.map((el)=>lettersArr.indexOf(el)+1)


// problem 3
const arr3 = [false,1,0,1,2,0,1,3,'a']
const temp1= [],temp2 = []
 arr3.forEach((el)=> el === 0? temp1.push(el) : temp2.push(el))
const newArr3 = temp2.concat(temp1)

//optimise
const arr = [...arr3.filter((el)=>el !== 0),...arr3.filter((el)=>el === 0)]


// problem 4
const arr4 = [{name:'abc',age:20},{name:'xyz',age:30}]
const newArr4 = arr4.map((el)=>el.name)


console.log(newArr,newArr1,newArr2,newArr3,arr,newArr4)