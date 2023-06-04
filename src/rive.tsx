/* eslint-disable qwik/valid-lexical-scope */
import {
  component$,
  useStore,
  useSignal,
  noSerialize,
  useVisibleTask$,
} from "@builder.io/qwik";
import * as rive from "@rive-app/canvas";
import { Options } from "./types";

export interface OptionsProps {
  options: Options;
}

export const QwikRive = component$(({ options }: OptionsProps) => {
  const store = useStore({
    rive: noSerialize({}),
    width: 1000,
    height: 1000,
  });

  const canvas = useSignal<Element>();

  useVisibleTask$(() => {
    store.rive = noSerialize(
      new rive.Rive({
        src: options.src,
        canvas: canvas.value as HTMLCanvasElement | OffscreenCanvas,
        autoplay: options.autoplay || true,
        animations: options.animations || "idle",
      })
    );
  });

  return (
    <canvas
      ref={canvas}
      width={options.width || store.width}
      height={options.height || store.height}
    ></canvas>
  );
});
