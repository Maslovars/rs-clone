import { useCallback } from 'react';
import "materialize-css/dist/js/materialize.min.js";

declare global {
    interface Window {
        M: any;
    }
}

const useMessage = () => {
    return useCallback((text) => {
        if (window.M && text)
            window.M.toast({ html: text });
    }, [])
}

export default useMessage;