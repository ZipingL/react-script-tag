import React, { useEffect, useRef, useState } from 'react';

export type ScriptLoaderProps = {
    delayMs?: number;
    onCreate?: (() => void) | undefined;
    className?: string;
    id?: string;
    onError?: OnErrorEventHandler;
    children?: React.ReactNode;
    onLoad?: ((e: Event) => void) | undefined;
    src: string;
    otherProps?: { [key: string]: string };
};

/**
 * 
 * @param delayMs - The delay in milliseconds before the script is loaded, optional, default is 0
 * @param onCreate - Callback function to be called when the script is created, or right after the call that appends the script to the DOM is made, optional
 * @param onError - Callback function to be called when the script fails to load, optional
 * @param onLoad - Callback function to be called when the script is loaded, optional
 * @param src - The source URL of the script to be loaded, required
 * @param otherProps - Any other attributes to be added to the script tag, optional, e.g. { "data-foo": "bar" }
 * @returns <></> - Returns an empty fragment
 * @example 
 * <ScriptLoader src="https://www.example.com/script.js" 
 *    delayMs={1000} onLoad={(e) => console.log("Script loaded successfully")} />
 */
export default function ScriptTag({
    delayMs = 0,
    onCreate = () => { },
    onError = (e: Event | string) => {
        console.error(typeof e === 'string' ? e : `Failed to load script at source ${(e.target as HTMLScriptElement).src}` +
            ` with error: ${e instanceof ErrorEvent ? e.error : 'Unknown error'}`);
    },
    onLoad = (e) => {
        console.info("Script loaded successfully at src ", (e.target as HTMLScriptElement).src);
    },
    src,
    id,
    className,
    children,
    otherProps = {},
}: ScriptLoaderProps
) {
    const timeoutRef = useRef<number | null>(null);
    const [scriptStatus, setScriptStatus] = useState<'not-started' | 'waiting-delay' | 'loading' | 'loaded' | 'error'>('not-started');
    const scriptRef = useRef<HTMLScriptElement | null>(null);

    useEffect(() => {


        if (scriptStatus === 'not-started') {
            setScriptStatus('waiting-delay');
            timeoutRef.current = window.setTimeout(() => {
                setScriptStatus('loading');

                const script = document.createElement('script');
                script.src = src;

                // Add custom attributes
                for (const [attr, value] of Object.entries(otherProps)) {
                    script.setAttribute(attr, `${value}`);
                }

                if (id) {
                    script.id = id;
                }

                if (className) {
                    script.className = className;
                }

                const boundOnLoad = onLoad?.bind(null) || undefined;
                const boundOnError = onError?.bind(null);
                const boundOnCreate = onCreate?.bind(null) || undefined;

                script.onload = (e) => {
                    setScriptStatus('loaded');
                    if (boundOnLoad) {
                        boundOnLoad(e);
                    }
                }
                script.onerror = (e) => {
                    setScriptStatus('error');
                    if (boundOnError) {
                        boundOnError(e);
                    }
                };


                scriptRef.current = script;
                script.onerror = onError as OnErrorEventHandler;
                document.body.appendChild(script);

                if (boundOnCreate) {
                    boundOnCreate();
                }
            }, delayMs);

        }
        return () => {
            if (timeoutRef.current && (scriptStatus === 'loading')) {
                // cleanup timeout to help prevent memory leaks
                clearTimeout(timeoutRef.current);
            }
        };

    }, [delayMs, onCreate, onError, onLoad, src, otherProps, scriptStatus, timeoutRef]);


    return <>
         {children}
    </>;
};

 
