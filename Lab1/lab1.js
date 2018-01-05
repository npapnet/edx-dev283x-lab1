const path = require('path');
// const fs = require('fs');
const jsonfile = require('jsonfile')
const csv = require('csvtojson')
const csvFilePath = path.join(__dirname, 'customer-data.csv')
const jsonFilePath = path.join(__dirname, 'customer-data.json')

console.log("==============================================================")
console.log('reading from: \n ', csvFilePath)
let jsonArray = [];
csv()
    .fromFile(csvFilePath)
    .on('json', (jsonObj) => {
        // combine csv header row and csv line to a json object
        // jsonObj.a ==> 1 or 4
        jsonArray.push(jsonObj)
    })
    .on('done', (error) => {
        console.log('end')
        jsonfile.writeFileSync(jsonFilePath, jsonArray, {
            spaces: 2,
            EOL: '\r\n'
        })
    })