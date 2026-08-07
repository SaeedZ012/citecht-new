import "@/styles/globals.css";
import { fontVariables } from "@/lib/fonts";
import { defaultMetadata } from "@/constants/metadata";
import { AppProviders } from "@/providers/AppProviders";

export const metadata = defaultMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
