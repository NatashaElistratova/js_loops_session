import { data } from '../data/data.js';

const ids = [12,13,14,15,1,2,2,3,4,11,12,11];

const unique = (array) => {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (!result.includes(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
}

// function unique(array) {
//     let result = [];
  
//     for (let i = 0; i < array.length; i++) {
//        const current = array[i];
//        const isDuplicate = result.some(item => item.id === current.id)

//        if (!isDuplicate) {
//         result.push(current);
//        }
//     }
    
//     return result;
// }

console.log(unique(ids))

