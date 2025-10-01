// Performance utilities for optimizing the landing page

// Lazy loading utility for images
export const lazyLoadImage = (src: string, placeholder?: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = reject;
    img.src = src;
  });
};

// Debounce function for scroll events
export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for high-frequency events
export const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function(...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Intersection Observer utility for animations
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  };

  if ('IntersectionObserver' in window) {
    return new IntersectionObserver(callback, defaultOptions);
  }
  
  // Fallback for browsers without IntersectionObserver
  return null;
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap';
  fontLink.as = 'style';
  document.head.appendChild(fontLink);

  // Preload hero image
  const heroImageLink = document.createElement('link');
  heroImageLink.rel = 'preload';
  heroImageLink.href = '/src/assets/hero-automotive.jpg';
  heroImageLink.as = 'image';
  document.head.appendChild(heroImageLink);
};

// Reduce motion for accessibility
export const respectsReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Optimize animations based on device capabilities
export const getOptimizedAnimationDuration = (baseDuration: number) => {
  // Reduce animation duration on lower-end devices
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    return baseDuration * 0.7;
  }
  
  // Respect reduced motion preference
  if (respectsReducedMotion()) {
    return 0;
  }
  
  return baseDuration;
};