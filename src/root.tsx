import { component$, useStore } from '@builder.io/qwik';
import { QwikRive } from './rive';
import { Options } from './types';

export default component$(() => {
  const store = useStore<Options>({
      src: 'https://cdn.rive.app/animations/vehicles.riv',
  });
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Rive Demo</title>
      </head>
      <body>
        <QwikRive options={store}></QwikRive>
      </body>
    </>
  );
});
