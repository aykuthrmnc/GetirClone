import {DependencyList, useCallback, useEffect, useRef} from "react";

const useDebounce = (
  fn: Function,
  {ms = 0, initialMs}: {ms: number; initialMs?: number},
  deps: DependencyList = [],
): {isReady: () => boolean | null; cancel: () => void} => {
  const firstRenderMs = useRef(initialMs ?? ms);
  const ready = useRef<boolean | null>(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const callback = useRef(fn);

  const isReady = useCallback(() => ready.current, []);

  const reset = useCallback(() => {
    ready.current = false;
    timeout.current && clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      ready.current = true;
      callback.current();
    }, firstRenderMs.current);
  }, [firstRenderMs.current]);

  const cancel = useCallback(() => {
    ready.current = null;
    timeout.current && clearTimeout(timeout.current);
  }, []);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  useEffect(() => {
    reset();

    if (firstRenderMs.current === initialMs) {
      firstRenderMs.current = ms;
    }

    return cancel;
  }, deps);

  return {isReady, cancel};
};

export default useDebounce;
