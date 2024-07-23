import SwapComponent from '@/components/SwapComponent';
import Balances from '@/components/Balances';
import { useGardenSetup } from '@/components/store';

export default function Page() {
  return (
    <div id="container">
      <Balances />
      <SwapComponent />
    </div>
  );
}
