import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

function useDarkMode(key) {
    const [val, setVal] = useLocalStorage(key);

    useEffect(() => {
        if (val) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [val]);

    return [val, setVal];
}

export default useDarkMode;

