const split = (str, delim) => {
  return delim = str.split("-");
 
}

const pairs = (str) => {
  let tempArr = str.split("")
  let answer = []

  for (let i = 0; i < tempArr.length; i = i + 2) {
    answer.push(tempArr[i] + tempArr[i+1])
  }

  return answer
}

const reverse = (str) => {
  let temp = "";
  for (let i = str.length - 1; i >= 0; i--) {
    temp += str[i]
  }
  return temp
}

module.exports = {
  split,
  pairs,
  reverse
}