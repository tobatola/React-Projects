let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};
//Need to understand why itemCount is passed as an argument instead of orderCount!


const getTax = (itemCount) => {
  return getSubTotal(itemCount) *0.06;
};
//Need to understand why itemCount is passed as an argument instead of just "calling" subtotal!
//I think it's so that getSubTotal and getTax are working off of the same data element

const getTotal = (itemCount) => {
  return getSubTotal(itemCount) + getTax(itemCount);
};
//Need to understand why itemCount is passed as an argument instead of orderCount!

console.log(getSubTotal(orderCount));
//orderCount is passed to getSubTotal as a parameter (and converted to itemCount)

console.log(getTotal(orderCount));
//orderCount is passed to getSubTotal as a parameter (and converted to itemCount)

//I THINK orderCount is converted to itemCount BECAUSE orderCount is a VARIABLE and itemCount is an ARGUMENT for a FUNCTION!!!!!


