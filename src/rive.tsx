/* eslint-disable qwik/valid-lexical-scope */
import { $, component$, useClientEffect$, useStore, useSignal } from '@builder.io/qwik';
import { Rive } from "@rive-app/canvas";
import { Options } from './types';

export interface OptionsProps {
  options: Options;
}

export const QwikRive = component$(({ options }: OptionsProps) => {
  const store = useStore({
    rive: {},
    width: 500,
    height: 500
  });
  const signal = useSignal<Element>();
  const createRive$ = $(() => {
    return new Rive({
      src: options.src,
      canvas: signal.value,
      autoplay: options.autoplay || true,
      animations: options.animations || 'idle',
    });
  });

  useClientEffect$(() => {
    store.rive = createRive$();
  });

  return <canvas ref={signal} width={options.width || store.width} height={options.height || store.height}></canvas>;
});
