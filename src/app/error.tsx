"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Global error boundary UI. Must be a Client Component and expose `reset`.
 */
export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Report to an error-monitoring service here.
  }, [error]);

  return (
    <Container size="sm">
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
        <Heading variant="h2">Something went wrong</Heading>
        <Text variant="muted">
          An unexpected error occurred. Please try again.
        </Text>
        <Button onClick={reset}>Try again</Button>
      </div>
    </Container>
  );
}
