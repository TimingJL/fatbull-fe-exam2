import React from 'react';

const useIntersectionObserver = ({
  onEntryIntersect,
  options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin around the root
    threshold: 0, // Trigger when 50% of the target is visible
  },
}: {
  onEntryIntersect: () => void;
  options?: IntersectionObserverInit;
}) => {
  const targetRef = React.useRef(null);

  React.useEffect(() => {
    const callback = (entries: { isIntersecting: boolean }[]) => {
      entries.forEach((entry: { isIntersecting: boolean }) => {
        if (entry.isIntersecting) {
          // The target is now in the viewport
          onEntryIntersect();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [options, onEntryIntersect]);

  return { targetRef };
};

export default useIntersectionObserver;
