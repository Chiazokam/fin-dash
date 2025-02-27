import { useMediaQuery } from 'react-responsive';

export const useIsMobile = (width: number) =>
    useMediaQuery({ query: `(max-width: ${width}px)` });
