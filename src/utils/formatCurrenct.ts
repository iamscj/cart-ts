const CUURENNCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "INR",
  style: "currency",
});

export function formatCurrency(number: number) {
  return CUURENNCY_FORMATTER.format(number);
}
