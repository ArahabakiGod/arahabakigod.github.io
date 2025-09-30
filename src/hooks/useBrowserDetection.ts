import { useEffect, useState } from 'react';

interface BrowserInfo {
    isOpera: boolean;
    isOperaGX: boolean;
    hasNarrowViewport: boolean;
    browserName: string;
}

export const useBrowserDetection = (): BrowserInfo => {
    const [browserInfo, setBrowserInfo] = useState<BrowserInfo>({
        isOpera: false,
        isOperaGX: false,
        hasNarrowViewport: false,
        browserName: 'unknown'
    });

    useEffect(() => {
        const detectBrowser = () => {
            const userAgent = navigator.userAgent.toLowerCase();
            const isOpera = /opr\/|opera/i.test(userAgent);
            const isOperaGX = /oprgx/i.test(userAgent) || (isOpera && /gx/i.test(userAgent));

            let browserName = 'unknown';
            if (isOperaGX) {
                browserName = 'operagx';
            } else if (isOpera) {
                browserName = 'opera';
            } else if (/edg/i.test(userAgent)) {
                browserName = 'edge';
            } else if (/chrome/i.test(userAgent) && !/edg/i.test(userAgent)) {
                browserName = 'chrome';
            } else if (/firefox/i.test(userAgent)) {
                browserName = 'firefox';
            } else if (/safari/i.test(userAgent) && !/chrome/i.test(userAgent)) {
                browserName = 'safari';
            }

            const hasNarrowViewport = window.innerWidth < 1280;

            setBrowserInfo({
                isOpera,
                isOperaGX,
                hasNarrowViewport,
                browserName
            });
        };

        detectBrowser();

        const handleResize = () => {
            setBrowserInfo(prev => ({
                ...prev,
                hasNarrowViewport: window.innerWidth < 1280
            }));
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return browserInfo;
};

export const useIsOpera = (): boolean => {
    const { isOpera } = useBrowserDetection();
    return isOpera;
};

export const useCompactLayout = (): boolean => {
    const { isOpera, isOperaGX, hasNarrowViewport } = useBrowserDetection();

    return hasNarrowViewport || isOpera || isOperaGX;
};