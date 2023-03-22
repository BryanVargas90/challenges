//Write a function taht takes the number of adults and returns the number of pizzas required to feed
//them, Assume 8 slices per pizza and assume each adult will eat 3 slices.round up to the nearest pie.

function totalNumPizzas (numAdults){ 
const totalSlices = numAdults * 3
const totalPizzas = totalSlices / 8
return Math.ceil(totalPizzas)
}

const pizza = totalNumPizzas(3)
console.log(pizza)