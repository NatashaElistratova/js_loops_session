// Выведете таблицу умножения в консоль

const getTable = () => {
  for (let i = 1; i < 10; i++) {
    let result = '';
    for (let j = 1; j < 10; j++) { 
      // result += i * j + ' ';
      result += `${i * j} `;
  
      if (i * j < 10) {
        result += ' ';
      }
    }
    console.log(result);
  }
}

getTable();


