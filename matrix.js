//Написати функцію яка отримує масив масивів (матрицю) і повертає масив який включає останні елементи з кожного підмасиву.

function matrixLastElement(matrix){
    let lastElements = [] //array consists of the last elements
    
    for (let i = 0; i < matrix.length; i +=1){
      if (matrix[i].length != 0){
        lastElements.push(matrix[i][matrix[i].length - 1])
      }
    }
    return(lastElements);
    }
  
    console.log(matrixLastElement([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
    // result [3,6,9]