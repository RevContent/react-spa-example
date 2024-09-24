import { useEffect, useState } from 'react';

export const SCRIPT_STATUS = {
  LOADING: 'loading',
  ERROR: 'error',
  READY: 'ready',
  UNKNOWN: 'unknown'
};

const checkConditions = arr => arr.some(entry => entry !== false);

export const useScript = (src, isConditional = false, options = {}) => {
  const [status, setStatus] = useState();
  let script = document.querySelector(`script[src="${src}"]`);

  const isLoadable =
    !isConditional || (isConditional && checkConditions(options.conditions));

  useEffect(() => {
    if (src && isLoadable) {
      const domStatus = script?.getAttribute('data-status');
      if (domStatus) {
        setStatus(domStatus);
        return;
      }

      if (script === null) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.setAttribute('data-status', SCRIPT_STATUS.LOADING);

        if (options?.target) {
          options?.target.appendChild(script);
        } else {
          document.body.appendChild(script);
        }

        const onLoad = () => {
          script.setAttribute('data-status', SCRIPT_STATUS.READY);
          setStatus(SCRIPT_STATUS.READY);
          removeEventListeners();
        };

        const onError = () => {
          script.setAttribute('data-status', SCRIPT_STATUS.ERROR);
          setStatus(SCRIPT_STATUS.ERROR);
          removeEventListeners();
        };

        const removeEventListeners = () => {
          script.removeEventListener('load', onLoad);
          script.removeEventListener('error', onError);
        };

        script?.addEventListener('load', onLoad);
        script?.addEventListener('error', onError);

        return () => {
          if (options?.remove === true) {
            script.remove();
            removeEventListeners();
          }
        };
      }
    }
  }, [src, isLoadable]);

  return { script, status };
};
