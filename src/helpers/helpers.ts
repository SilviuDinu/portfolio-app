export const debounce = (fn: Function, ms: number): ((...args: unknown[]) => void) => {
  let timer: NodeJS.Timeout;
  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, ms);
  };
};

export const preloadImage = (src: string) => {
  if (!document.head.querySelector(`link[rel="preload"][href="${src}"][as="image"]`)) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  }
};

export const formatPhoneNumber = (value: string) => {
  if (!value) {
    return '';
  }
  return /^(\+[0-9])/.test(value)
    ? value.toString().replace(/(\+\d{2})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4')
    : value.toString().replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
};
