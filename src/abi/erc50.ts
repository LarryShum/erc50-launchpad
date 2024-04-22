export const erc50abi = [
  {
    inputs: [
      { internalType: "address", name: "router_", type: "address" },
      { internalType: "address", name: "factory_", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountPerUnits",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "uniswapRouter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "uniswapFactory",
        type: "address",
      },
      { indexed: false, internalType: "string", name: "name", type: "string" },
      {
        indexed: false,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eachAddressLimitEthers",
        type: "uint256",
      },
    ],
    name: "TokenCreated",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_price", type: "uint256" },
      { internalType: "uint256", name: "_amountPerUnits", type: "uint256" },
      { internalType: "uint256", name: "_totalSupply", type: "uint256" },
      { internalType: "string", name: "_name", type: "string" },
      { internalType: "string", name: "_symbol", type: "string" },
      {
        internalType: "uint256",
        name: "_eachAddressLimitEthers",
        type: "uint256",
      },
    ],
    name: "createToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
];
