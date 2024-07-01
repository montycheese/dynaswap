import { Section, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import './IndexPage.css';
import {DynamicEmbeddedWidget} from "@dynamic-labs/sdk-react-core";
import {Link} from "@/components/Link/Link.tsx";

export const IndexPage: FC = () => {
  return (
      <>
          <h1>Dynaswap</h1>
          <h3>
              The fastest way to swap with a non-custodial wallet on telegram!
          </h3>
          <DynamicEmbeddedWidget background="none"/>
          <Link to="fund-wallet">Funding page</Link>
          <br/>
          <Link to="swap">Swap page</Link>
    </>
  );
};
