import { Section, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import './IndexPage.css';
import {DynamicWidget} from "@dynamic-labs/sdk-react-core";
import {Link} from "@/components/Link/Link.tsx";

export const IndexPage: FC = () => {
  return (
    <List>
      <Section
        header='Dynaswap'
      >
          <div>
              The fastest way to swap with a non-custodial wallet on telegram!
          </div>
          <DynamicWidget/>
          <Link to="fund-wallet">Funding page</Link>
          <Link to="swap">Swap page</Link>
      </Section>
    </List>
  );
};
