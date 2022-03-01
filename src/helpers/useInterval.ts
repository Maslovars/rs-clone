import { useEffect, useRef } from 'react';

function useInterval(callback: () => void, delay: number, started: boolean, start: boolean, setStarted: (start: boolean) => void) {
    const savedCallback = useRef();

    useEffect(() => {
        if (started) {
            return;
        }
        if (!start) {
            return;
        }
        setStarted(true);
        // @ts-ignore
        savedCallback.current = callback;
    }, [callback, start, started, setStarted]);

    useEffect(() => {
        function tick() {
            // @ts-ignore
            savedCallback.current();
        }

        const id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
}

export default useInterval;
