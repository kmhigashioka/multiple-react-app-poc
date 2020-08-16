import React from 'react';
import { TMoreRoutePageContext } from './types';

const MoreRoutePageContext = React.createContext<
  TMoreRoutePageContext | undefined
>(undefined);

MoreRoutePageContext.displayName = 'MoreRoutePageContext';

export const useMoreRoutePageContext = (): TMoreRoutePageContext => {
  const context = React.useContext(MoreRoutePageContext);
  if (context === undefined) {
    throw new Error(
      'useMoreRoutePageContext must be used within a MoreRoutePageProvider.',
    );
  }
  return context;
};

export default MoreRoutePageContext;
