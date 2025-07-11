import type { Metadata } from "next";

import { CopilotKit } from "@copilotkit/react-core";

import "@copilotkit/react-ui/styles.css";
import "./globals.css";
import { FronteggAppProvider } from "@frontegg/nextjs/app";
export const metadata: Metadata = {
  title: "CoAgents Starter",
  description: "CoAgents Starter",
};

export default function RootLayout({ children }: { children: any }) {
  const authOptions = {
    keepSessionAlive: true,
  };

  return (
    <html lang="en">
      <body>
        <FronteggAppProvider authOptions={authOptions}>
          <CopilotKit
            agent="sample_agent"
            runtimeUrl="/api/copilotkit"
            showDevConsole={false}
          >
            {children}
          </CopilotKit>
        </FronteggAppProvider>
      </body>
    </html>
  );
}
