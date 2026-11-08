import React, { useEffect, useRef } from 'react';

export default function VimeoEmbed({ vimeoId, title }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Load Vimeo API script only when component mounts
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
      <iframe
        ref={iframeRef}
        src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        title={title}
        loading="lazy"
      ></iframe>
    </div>
  );
}