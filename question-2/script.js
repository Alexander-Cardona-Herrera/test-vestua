/**
 * On this module you should write your answer to question #2.
 * This file would be executed with the following command:
 * $ node scritp.js BrowsingEvents.csv
 */

const args = process.argv.slice(-1);
console.log(`Running question #2 with args ${args}`)


// making the data manageble
const fs = require('fs')

const data = fs.readFileSync(process.argv.slice(-1)[0], 'utf8')

const lists = data.split("\n")

const dataLists = []
for (let list of lists) {
    dataLists.push(list.split(","))
}
dataLists.shift()

// arranging the data in a new way
let usersIds = []
for (let userId of dataLists){
    usersIds.push(userId[0])
}
usersIds.pop()
usersIds = [...new Set(usersIds)]

let arrangeData = {}
for (let userId of usersIds) {
    arrangeData[userId] = {}
    arrangeData[userId].clicks = []
    arrangeData[userId].impressions = []
  
    for (let item of dataLists) {
        if (item[0] == userId){
            if (item[3] == 'click'){
                arrangeData[userId].clicks.push(item[1])
            }
            if (item[3] == 'impression'){
                arrangeData[userId].impressions.push(item[1])
            }
        }
    }
}

// generating the require data
for (let userId in arrangeData){
    arrangeData[userId].clicks = [...new Set(arrangeData[userId].clicks)]
    arrangeData[userId].impressions = [...new Set(arrangeData[userId].impressions)]
}

let productIds = []
for (let productId of dataLists){
    productIds.push(productId[1])
}
productIds.pop()
productIds = [...new Set(productIds)]

let outputData = []
for (let productId of productIds) {
  outputLine = [productId, 0, 0, 0]

  for (let user in arrangeData){
    for (click of arrangeData[user].clicks){
      if (click == productId){
        outputLine[1] += 1
      }
    }
    for (impression of arrangeData[user].impressions){
      if (impression == productId){
        outputLine[2] += 1
      }
    }
  }
  if (outputLine[1] / outputLine[2] === Infinity) {
    outputLine[3] = 'possible issue'
  }else {
      outputLine[3] = (outputLine[1] / outputLine[2]).toFixed(4)
  }

  outputData.push(outputLine)
}

// creating the outputData.csv file
let toString = outputData.map(item => item.join(",")).join("\n");
const header = 'productId,clicks,impressions,ctr\n'

fs.writeFile('output.csv', header + toString, function (err) {
  if (err) throw err;
  console.log('file properly created');
});
