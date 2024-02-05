// forEach functions

function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(num){
        return newArr.push(num * 2);
    });
    return newArr;
}

function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(num){
        if(num % 2 === 0){
            newArr.push(num);
        }
    });
    return newArr;
}

function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(function(str){
        let first = str[0];
        let last = str[str.length - 1];
        newArr.push(first + last);
    });
}

function addKeyAndValue(arr, key, value){
    arr.forEach(function(obj){
        obj[key] = value;
    });
    return arr;
}

//  come back to this one (I had to use answer to study and learnt)
function vowelCount(str){
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";

    splitArr.forEach(function(letter) {
        let lowerCasedLetter = letter.toLowerCase()
        // check to see if it is a vowel...
        if (vowels.indexOf(lowerCasedLetter) !== -1) {
            // either add on to the count or initialize it as 1
            if (obj[lowerCasedLetter]) {
                obj[lowerCasedLetter]++;
            } else {
                obj[lowerCasedLetter] = 1;
            }
        }
    });
    return obj;
}



// map functions

function doubleValuesWithMap(arr){
    return arr.map(function(num){
        return num * 2;
    });
}

function valTimesIndex(arr, index){
   return arr.map(function(num){
    return num * index;
   });
}

function extractKey(arr, key){
    return arr.map(function(obj){
        return obj[key];
    });
}

function extractFullName(arr){
    return arr.map(function(obj){
        return obj.first + " " + obj.last;
    });
}




// filter functions

function filterByValue(arr, key){
   return arr.filter(function(value){
    if(value[key] !== undefined){
        return value;
    }
   });
}

function find(arr, searchValue){
   return arr.filter(function(value){
        if(value === searchValue){
            return value;
        }
        else{
            return undefined;
        }
    });
}

function findInObj(arr, key, searchValue){
    return arr.filter(function(value){
        if(value[key] === searchValue){
            return value;
        }
    });
}

function removeVowels(str){
    const vowels = "aeiou";
    return str.toLowerCase().split('').filter(function(value){
        if (vowels.indexOf(value) === -1){
            return value;
        }
    }).join('');
}

function doubleOddNumbers(arr){
    return arr
    .filter(function(value){
        return value % 2 !== 0;
    })
    .map(function(value){
        return value * 2;
    });
}
