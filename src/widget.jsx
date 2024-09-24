import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useScript } from './hooks/useScript';

// Widgets consume 3 basic properties. Your widget and pub ID which you have
// received from your account rep and then an optional refresh parameter that
// will tell the placement to re-render on mount. This pattern is ideal for
// any actions that would represent a user navigating to another page. If this
// value is false, the widget component will behave as a persistent placement
// and will not render again once it has rendered.
function Widget({ widgetId, pubId, refreshOnLoad = false }) {
  const widgetRef = useRef(null);

  useScript(
    `https://delivery.revcontent.com/${pubId}/${widgetId}/widget.js`,
    false,
    {
      remove: false
    }
  );

  useEffect(() => {
    if (typeof window.renderWidgetPlacement === 'function' && refreshOnLoad)
      window.renderWidgetPlacement(widgetRef.current);
  }, [refreshOnLoad]);

  return (
    <div
      ref={widgetRef}
      data-widget-id={widgetId}
      data-pub-id={pubId}
      data-widget-host="revcontent"
    />
  );
}

Widget.propTypes = {
  widgetId: PropTypes.number.isRequired,
  pubId: PropTypes.number.isRequired,
  refreshOnLoad: PropTypes.bool
};

export default Widget;
