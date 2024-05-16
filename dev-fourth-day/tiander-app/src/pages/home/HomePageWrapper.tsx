import { lazy, Suspense } from "react";

// Lazy load
const HomePage = lazy(() => import("./HomePage"));

type HomePageWrapperProps = {
  readonly accountId: string;
};

const HomePageWrapper = ({ accountId }: HomePageWrapperProps) => {
  return (
    <Suspense fallback={<div />}>
      <HomePage accountId={accountId} />
    </Suspense>
  );
};

export default HomePageWrapper;
