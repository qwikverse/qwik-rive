/* eslint-disable qwik/valid-lexical-scope */
import { component$, useClientEffect$, useStore, useSignal, noSerialize } from '@builder.io/qwik';
import * as rive from "@rive-app/canvas";
import { Options } from './types';

export interface OptionsProps {
  options: Options;
}

export const QwikRive = component$(({ options }: OptionsProps) => {
  const store = useStore({
    rive: noSerialize({}),
    width: 500,
    height: 500
  });

  const canvas = useSignal<Element>();

  useClientEffect$(() => {
    store.rive = noSerialize(new rive.Rive({
      src: options.src,
      canvas: canvas.value,
      autoplay: options.autoplay || true,
      animations: options.animations || 'idle',
    }));
  });

  return <canvas ref={canvas} width={options.width || store.width} height={options.height || store.height}></canvas>;
});
