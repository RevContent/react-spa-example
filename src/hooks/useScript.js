import { useEffect, useState } from 'react';

export const SCRIPT_STATUS = {
  LOADING: 'loading',
  ERROR: 'error',
  READY: 'ready',
  UNKNOWN: 'unknown'
};

const checkConditions = arr => arr.some(entry => entry !== false);

export const useScript = (src, isConditional = false, options = {}) => {
  const [status, setStatus] = useState(SCRIPT_STATUS.UNKNOWN);

  useEffect(() => {
    if (!src) return;

    const isLoadable =
      !isConditional || (isConditional && checkConditions(options.conditions));

    if (!isLoadable) {
      setStatus(SCRIPT_STATUS.UNKNOWN);
      return;
    }

    let script = document.querySelector(`script[src="${src}"]`);
    let isMounted = true;

    const updateStatus = newStatus => {
      if (isMounted) {
        setStatus(newStatus);
      }
    };

    if (script) {
      const domStatus = script.getAttribute('data-status');
      updateStatus(domStatus || SCRIPT_STATUS.READY);
      return;
    }

    script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.setAttribute('data-status', SCRIPT_STATUS.LOADING);

    updateStatus(SCRIPT_STATUS.LOADING);

    const onLoad = () => {
      script.setAttribute('data-status', SCRIPT_STATUS.READY);
      updateStatus(SCRIPT_STATUS.READY);
    };

    const onError = () => {
      script.setAttribute('data-status', SCRIPT_STATUS.ERROR);
      updateStatus(SCRIPT_STATUS.ERROR);
    };

    script.addEventListener('load', onLoad);
    script.addEventListener('error', onError);

    const target = options.target || document.body;
    target.appendChild(script);

    return () => {
      isMounted = false;
      script.removeEventListener('load', onLoad);
      script.removeEventListener('error', onError);

      if (options.remove) {
        script.remove();
      }
    };
  }, [src, isConditional, options.conditions, options.target, options.remove]);

  return { status };
};
