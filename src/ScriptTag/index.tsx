import React, { useEffect, useRef, useState } from 'react';

export type ScriptLoaderProps = {
    delayMs?: number;
    onCreate?: (() => void) | undefined;
    className?: string;
    id?: string;
    onError?:  OnErrorEventHandler | undefined;
    children?: React.ReactNode;
    onLoad?: ((e: Event) => void) | undefined;
    src: string;
    [key: string]: any; // For any additional attributes
 
}  & React.HTMLProps<HTMLScriptElement> 
/**
 * 
 * @param delayMs - The delay in milliseconds before the script is loaded, optional, default is 0
 * @param onCreate - Callback function to be called when the script is created, or right after the call that appends the script to the DOM is made, optional, useful if you need to handle something right when the delay timer begins and hence when the script has not yet been loaded. Not that useful if delayMs is 0 unless for some debugging purposes.
 * @param onError - Callback function to be called when the script fails to load, optional
 * @param onLoad - Callback function to be called when the script is loaded, or in other words when the script has succesfully loaded and executed its contents, optional
 * @param src - The source URL of the script to be loaded, required
 * @param ...otherProps - Any additional attributes to be added to the script tag, optional
 * @param children - Any children to be rendered, optional, default is an empty fragment
 * @returns <></> - Returns an empty fragment or fragment with children
 * @example 
 * <ScriptLoader 
 *    data-other-prop="other-prop-value"  
 *    src="https://www.example.com/script.js" 
 *    delayMs={1000} onLoad={(e) => console.log("Script loaded successfully")} />
 */
export default function ScriptTag(
   {    delayMs = 0,
    onCreate = () => { },
    onError = (e) => {
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
    ...otherProps
} : ScriptLoaderProps
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
                script.onerror = onError;
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

 
