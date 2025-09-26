import * as chains from "viem/chains";

export type ScaffoldConfig = {
  targetNetworks: readonly chains.Chain[];
  pollingInterval: number;
  alchemyApiKey: string;
  rpcOverrides?: Record<number, string>;
  walletConnectProjectId: string;
  onlyLocalBurnerWallet: boolean;
};

export const DEFAULT_ALCHEMY_API_KEY = "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF";

const scaffoldConfig = {
  // The networks on which your DApp is live
  // Updated for ETHSafari - includes testnet chains for development
  targetNetworks: [
    chains.hardhat, // Local development
    chains.polygonMumbai, // Primary testnet for ETHSafari (low fees)
    chains.baseSepolia, // Alternative testnet option
    // chains.celoAlfajores,  // Uncomment if you want to use Celo testnet
  ],

  // The interval at which your front-end polls the RPC servers for new data
  // Reduced for better UX during demos
  pollingInterval: 10000,

  // This is ours Alchemy's default API key.
  // You can get your own at https://dashboard.alchemyapi.io
  // It's recommended to store it in an env variable:
  // .env.local for local testing, and in the Vercel/system env config for live apps.
  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || DEFAULT_ALCHEMY_API_KEY,

  // Custom RPC overrides for better performance
  rpcOverrides: {
    // Polygon Mumbai - free public RPC
    [chains.polygonMumbai.id]: "https://rpc-mumbai.maticvigil.com",

    // Alternative Mumbai RPC (backup)
    // [chains.polygonMumbai.id]: "https://polygon-mumbai.g.alchemy.com/v2/" + (process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || DEFAULT_ALCHEMY_API_KEY),

    // Base Sepolia - using Alchemy
    [chains.baseSepolia.id]:
      `https://base-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || DEFAULT_ALCHEMY_API_KEY}`,
  },

  // This is ours WalletConnect's default project ID.
  // You can get your own at https://cloud.walletconnect.com
  // It's recommended to store it in an env variable:
  // .env.local for local testing, and in the Vercel/system env config for live apps.
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "3a8170812b534d0ff9d794f19a901d64",

  // Allow burner wallet on testnets too for easy testing
  onlyLocalBurnerWallet: false,
} as const satisfies ScaffoldConfig;

export default scaffoldConfig;
