export interface LaunchpadListTypes {
  tokens: Token[];
  protocols: Protocol[];
}

interface Token {
  creator: string;
  amountPerUnits: string;
  eachAddressLimitEthers: string;
  hash: string;
  id: string;
  launched: boolean;
  minted: string;
  price: string;
  name: string;
  raised: string;
  symbol: string;
  totalSupply: string;
  uniswapFactory: string;
  uniswapRouter: string;
}

interface Protocol {
  id: string;
  totalRaised: string;
  totalTokens: string;
}
