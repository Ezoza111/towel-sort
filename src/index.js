
// You should implement your task here.
module.exports = function towelSort(matrix) {
  let arr = []
  if (typeof matrix != 'object' ) {return arr}
  if (matrix.length === 0 ) {return arr}

  for (i = 0; i < matrix.length; i++) {
     if (i % 2 != 0) {
        const reverseArray = matrix[i].reverse()  
        for (j=0; j < reverseArray.length; j++ ) {
           arr.push(reverseArray[j])
        }
     } else {
        for (j=0; j < matrix[i].length; j++ ) {
           arr.push(matrix[i][j])
        }
     }

  }
  return array
}

