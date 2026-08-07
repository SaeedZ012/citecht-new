import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Link } from "@/components/ui/Link";
import { ROUTES } from "@/constants/routes";

/**
 * Global 404 page.
 */
export default function NotFound() {
  return (
    <Container size="sm">
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
        <Heading variant="display">404</Heading>
        <Text variant="muted">
          The page you&apos;re looking for doesn&apos;t exist.
        </Text>
        <Link href={ROUTES.home} variant="unstyled">
          <Button>Back home</Button>
        </Link>
      </div>
    </Container>
  );
}
