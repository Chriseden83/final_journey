'use client';

import { useEffect } from 'react';

export default function TitleGuard() {
  useEffect(() => {
    let lastSafeTitle = document.title;

    const enforceTitle = () => {
      const currentTitle = document.title;
      if (/new message/i.test(currentTitle)) {
        document.title = lastSafeTitle;
        return;
      }

      lastSafeTitle = currentTitle;
    };

    const intervalId = window.setInterval(enforceTitle, 250);
    document.addEventListener('visibilitychange', enforceTitle);

    const titleElement = document.querySelector('title');
    const observer =
      titleElement &&
      new MutationObserver(() => {
        enforceTitle();
      });

    observer?.observe(titleElement, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener('visibilitychange', enforceTitle);
      observer?.disconnect();
    };
  }, []);

  return null;
}
