import { data } from '../data/data.js';
// Убрать дубликаты из массива
const ids = [12,13,14,15,1,2,2,3,4,11,12,11];

// Способ 1
const unique = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];

        if (!result.includes(current)) {
            result.push(current)
        }
    }
    return result;
}

console.log(unique(ids))

// Способ 2
const uniqueArr = [...new Set(ids)]
uniqueArr.sort((a, b) => b > a ? -1 : 1)

console.log(uniqueArr)

// Убрать дубликаты объектов по id (все объекты в массиве должны иметь уникальные id) 
const uniqueArrObj = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const isDuplicate = result.some(item => item.id === arr[i].id);

        if (!isDuplicate) {
            result.push(arr[i])
        }
    }
    return result;
}

console.log(uniqueArrObj(data))

// Вернуть массив с пользователями, живущими в городе Gwenborough
const filteredUsers = (users) => {
    return users.filter(item => item.address.city === 'Gwenborough');
}

console.log(filteredUsers(data));






