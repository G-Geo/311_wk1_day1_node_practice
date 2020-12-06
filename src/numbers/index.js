const isEven = (num) => {
  if (num % 2 === 0){
    return true
  } else { return false }
}

const sum = (arr) => {
  let tempSum = 0;
  for(let i = 0; i < arr.length; i++){
    tempSum = tempSum + arr[i]
  }
  return tempSum
}

const comboSum = (arr, sum) => {
for (let i = 0; i < arr.length - 1; i++) {
  for (let p = 1; p < arr.length; p++) {
    let tempSum = 0;
    tempSum = arr[i] + arr[p]
    if (tempSum === sum){
      return true
    }
  }
}
return false
}

module.exports = {
  isEven,
  sum,
  comboSum
}