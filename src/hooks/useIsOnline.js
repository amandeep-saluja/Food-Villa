import { useEffect, useState } from 'react';

const useIsOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const handleOnline = () => {
            console.log('✅');
            setIsOnline(true);
        };
        const handleOffline = () => {
            console.log('🔴');
            setIsOnline(false);
        };
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            document.removeEventListener('online', handleOnline);
            document.removeEventListener('offline', handleOffline);
        };
    }, []);

    return isOnline;
};

export default useIsOnline;
