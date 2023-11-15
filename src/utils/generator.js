// Regular Price and Discount percentage to discount price
export const discountCalculator = (priceValue, discountPercentValue) => {
  const price = parseInt(priceValue);
  const discountPercent = parseInt(discountPercentValue);
  const discount = discountPercent / 100;
  const total = price - price * discount;
  return parseInt(total.toFixed(0));
};
