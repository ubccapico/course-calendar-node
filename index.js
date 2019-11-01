const parse = require('csv-parse')
const { readFile } = require('fs')
const { promisify } = require('util')

const readFileP = promisify(readFile)
const parseP = promisify(parse)

readFileP('./ubc_course_calendar_data.csv')
  .then(data => parseP(data, { delimiter: ',', columns: true }))
  .then(courseCalendarData => console.log(courseCalendarData))
