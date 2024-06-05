import React from 'react';
export type ScriptLoaderProps = {
    delayMs?: number;
    onCreate?: (() => void) | undefined;
    className?: string;
    id?: string;
    onError?: OnErrorEventHandler | undefined;
    children?: React.ReactNode;
    onLoad?: ((e: Event) => void) | undefined;
    src: string;
    [key: string]: any;
} & React.HTMLProps<HTMLScriptElement>;
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
export default function ScriptTag({ delayMs, onCreate, onError, onLoad, src, id, className, children, ...otherProps }: ScriptLoaderProps): React.JSX.Element;
