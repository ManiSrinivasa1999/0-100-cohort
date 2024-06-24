/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const res = []
  for (let index = 0; index < transactions.length; index += 1) {
    const element = transactions[index]
    if (Object.keys(res).includes(element.category)) {
      res[element.category].totalSpent += element.price
    } else {
      res[element.category] = {
        category: element.category,
        totalSpent: element.price,
      }
    }
  }
  return Object.values(res)
}

module.exports = calculateTotalSpentByCategory
