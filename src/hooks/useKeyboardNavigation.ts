import { useEffect, useRef } from 'react';

type FocusableElement = HTMLButtonElement | HTMLInputElement;

export function useKeyboardNavigation() {
  const elementsRef = useRef<FocusableElement[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;

      if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
        event.preventDefault();

        const focusedElement = document.activeElement as HTMLElement;
        const index = elementsRef.current.indexOf(focusedElement as FocusableElement);

        if (index === -1) return;

        let newIndex: number;

        if (key === 'ArrowUp' || key === 'ArrowLeft') {
          newIndex = index > 0 ? index - 1 : elementsRef.current.length - 1;
        } else if (key === 'ArrowDown' || key === 'ArrowRight') {
          newIndex = index < elementsRef.current.length - 1 ? index + 1 : 0;
        } else {
          return;
        }

        const newElement = elementsRef.current[newIndex];

        if (newElement) {
          newElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return elementsRef;
}