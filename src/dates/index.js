// import moment here; use this package in each function
const moment = require("moment");
let m = moment()

//tests did not include saturday and sunday into the answer array, so I added them
//so this test could pass on saturdays and sundays
const today = () => {
return m.format("dddd")
}

const calendar = () => {
  return m.format("MMM DD, YYYY")
}

const currentTime = () => {
  return m.format("hh:mm:ss A")
}

module.exports = {
  today,
  calendar,
  currentTime
}

//Couldn't get the tests to run properly. Will ask about it in class.