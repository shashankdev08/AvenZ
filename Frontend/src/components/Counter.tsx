import React, { useEffect, useRef, useState, useCallback, memo } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export const Counter: React.FC<CounterProps> = memo(({ end, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const domRef = useRef<HTMLSpanElement>(null);
  const isAnimated = useRef(false);

  const startAnimation = useCallback(() => {
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic for smoother deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isAnimated.current) {
          isAnimated.current = true;
          startAnimation();
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [startAnimation]);

  return (
    <span ref={domRef} aria-label={`${end}${suffix}`}>
      {count.toLocaleString()}{suffix}
    </span>
  );
});

Counter.displayName = 'Counter';
