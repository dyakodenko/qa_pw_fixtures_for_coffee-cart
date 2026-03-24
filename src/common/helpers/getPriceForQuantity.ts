export function unitPriceFormatStr(unitPrice: number, unitsNumber: number) {
  return `$${unitPrice.toFixed(2)} x ${unitsNumber}`;
}

export function priceFormatStr(unitPrice: number, unitsNumber = 1) {
  return `$${(unitPrice * unitsNumber).toFixed(2)}`;
}

export function totalPriceFormatStr(unitPrice: number, unitsNumber: number) {
  return `Total: $${(unitPrice * unitsNumber).toFixed(2)}`;
}
