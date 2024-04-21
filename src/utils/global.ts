export function shortenAddress(address: string, length = 4) {
  if (!address || address.length <= length) {
    return address;
  }

  const prefix = address.substring(0, length);
  const suffix = address.slice(-length);

  return `${prefix}...${suffix}`;
}
