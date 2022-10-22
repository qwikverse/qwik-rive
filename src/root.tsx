import { component$ } from '@builder.io/qwik';
import { QwikRive } from './rive';

export default component$(() => {
  const store =  {
      src: 'https://cdn.rive.app/animations/vehicles.riv',
  };
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