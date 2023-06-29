import { useCallback, useRef } from 'react';

export const useDebounce = (delay = 300, notDelayInFirstTime = true) => {
  /* Executa a função de imediato.(normalmente utilizado no carregamento da pagina) */
  const isFirstTime = useRef(notDelayInFirstTime);
  /* Armazena o timeout */
  const debouncing = useRef<NodeJS.Timeout>();

  const debounce = useCallback(
    (func: () => void) => {
      if (isFirstTime.current) {
        isFirstTime.current = false;
        func();
      } else {
        /* Renova o timeout */
        if (debouncing.current) {
          clearTimeout(debouncing.current);
        }
        debouncing.current = setTimeout(() => func(), delay);
      }
    },
    [delay],
  );

  return { debounce };
};
