import { useGardenSetup } from '@/components/store';
import { Suspense, lazy } from 'react';

export default function Page() {
  const Balances = lazy(() => import("../../../components/Balances"));
  const SwapComponent = lazy(() => import("../../../components/SwapComponent"))
  return (
    <div id="container">
      <Suspense fallback={<div>Not loaded yet...</div>}>
        <Balances />
        <SwapComponent />
      </Suspense>
    </div>
  );
}
