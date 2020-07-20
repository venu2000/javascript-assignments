let shoppingList = ["grams","sugar","salt","rice","coffee","milk"]
let shoppingBasket = []



shoppingBasket.push(prompt(shoppingList));
Array.prototype.push.apply(shoppingList,shoppingBasket)
console.log(shoppingList)
