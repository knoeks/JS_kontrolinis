"use strict"

const friends = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];

let filterNames = (nameArr, str) => {
    let newArr = [];
    newArr = nameArr.filter((name) => {
        return name.includes(str);
    })
    
    newArr.sort()
    for (let index = 0; index < newArr.length; index++) {
        newArr[index] = "*" + newArr[index];
    }

    return newArr;
}


console.log(filterNames(friends, 'ka'));
console.log(filterNames(friends, 'e'));
