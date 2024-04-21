export function shortenAddress(address: string, length = 4) {
  if (!address || address.length <= length) {
    return address;
  }

  const prefix = address.substring(0, length);
  const suffix = address.slice(-length);

  return `${prefix}...${suffix}`;
}

export function currencyFormat(input: string | number) {
  if (input == null || isNaN(Number(input))) {
    return "";
  }

  const number = typeof input === "string" ? parseFloat(input) : input;

  const minimumFractionDigits = Math.abs(number) < 1 ? 0 : 2;
  const maximumFractionDigits = Math.abs(number) < 1 ? 4 : 2;

  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(number);

  return formatted.replace("$", "").trim();
}
