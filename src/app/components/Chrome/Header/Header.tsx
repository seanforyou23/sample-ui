import * as React from 'react';
import { Brand } from '../Header/Brand/Brand';
import { HeaderTools } from '../Header/HeaderTools/HeaderTools';

export const Header: React.FunctionComponent<{}> = () => {
  return (
    <header role="banner" className="pf-c-page__header">
      <Brand />
      <HeaderTools />
    </header>
  );
}
