export function currencyFormat(input: string | number) {
  if (input == null || isNaN(Number(input))) {
    return "";
  }

  const number = typeof input === "string" ? parseFloat(input) : input;

  const minimumFractionDigits = Math.abs(number) < 1 ? 0 : 0;
  const maximumFractionDigits = Math.abs(number) < 1 ? 4 : 2;

  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(number);

  return formatted.replace("$", "").trim();
}

export function CurrencyFormatInput(value: string | number) {
  if (value === null || value === undefined) {
    return "";
  }

  const stringValue = value.toString().replace(/[^\d.]/g, "");
  const numericValue = parseFloat(stringValue);

  if (isNaN(numericValue)) {
    return "";
  }

  const formattedValue = numericValue.toLocaleString("en-US");

  return formattedValue;
}
