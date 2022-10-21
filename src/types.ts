export type renderer = 'svg';
import { Layout } from "@rive-app/canvas";

export interface Options {
  canvas?: Element, // required
  src?: string, // one of src or buffer is required
  buffer?: ArrayBuffer, // one of src or buffer is required
  artboard?: string,
  animations?: string | string[],
  stateMachines?: string | string[],
  layout?: Layout,
  autoplay?: boolean,
  onLoad?: Function,
  onLoadError?: Function,
  onPlay?: Function,
  onPause?: Function,
  onStop?: Function,
  onLoop?: Function,
  onStateChange?: Function,
  useOffscreenRenderer?: boolean,
  width?: string;
  height?: string;
}

