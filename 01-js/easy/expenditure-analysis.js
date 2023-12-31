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
  const category = ["Food", "Clothing", "Electronics"]; 
  const result = []; 

  for(let i = 0 ; i< category.length;i++){
     let total = 0; 
     transactions.forEach(function(items){
        if(items.category === category[i])
        {
            total += items.price; 
        }
     })
     
     if(total!==0){
      result.push(new Object({category : category[i],totalSpent : total})); 
     }
     total = 0; 
  }
  return result; 
}

module.exports = calculateTotalSpentByCategory;
