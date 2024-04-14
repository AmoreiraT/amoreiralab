import { lazy } from 'react';
import { useInitial } from './useInitial';

function delayForDemo(
  promise: Promise<{ ComponentPreviews(): JSX.Element }>
): Promise<{
  default: React.ComponentType<unknown>;
}> {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        promise.then((value) => resolve({ default: value.ComponentPreviews })),
      2000
    );
  });
}

const ComponentPreviews = lazy(() => delayForDemo(import('./previews')));

export { ComponentPreviews, useInitial };
