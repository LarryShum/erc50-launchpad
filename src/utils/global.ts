export function shortenAddress(address: string, length = 4) {
  if (!address || address.length <= length) {
    return address;
  }

  const prefix = address.substring(0, 2 + length);
  const suffix = address.slice(-length);

  return `${prefix}...${suffix}`;
}

export function currencyFormat(input: string | number) {
  if (input === null || undefined) {
    return "";
  }

  // Convert the input to a number if it's a string
  const number = typeof input === "string" ? parseFloat(input) : input;

  if (isNaN(number)) {
    return "";
  }

  const roundedNumber = Math.floor(number * 100) / 100;
  const hasFractionalPart = roundedNumber % 1 !== 0;

  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: hasFractionalPart ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(roundedNumber);

  return formatted.replace("$", "").trim();
}
