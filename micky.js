const meddy = {
  "1": [{ "author": "John Smith", "category": "Fiction", "title": "The Great Gatsby" }],
  "2": [{ "author": "The writer", "title": "The JavaScript Book", "category": "Education" }]
}
let arrayMap = []
let surprize = [1, 2, 3]

const micky = Object.values(meddy)
for (let i = 0; i < micky.length; i++) {
  arrayMap.push(micky[i][0])
}

console.log(arrayMap)