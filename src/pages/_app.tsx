import { AppLayout } from "@/components/common/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AvatarBlockies } from "@/components/common/avatar";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_LAUNCHPAD_ERC50,
  cache: new InMemoryCache(),
});

const config = getDefaultConfig({
  appName: "ERC50 Launchpad",
  projectId: process.env.NEXT_PUBLIC_ALCHEMY_ID as string,
  chains: [base],
  ssr: true,
});

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact" avatar={AvatarBlockies}>
          <ApolloProvider client={client}>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </ApolloProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
