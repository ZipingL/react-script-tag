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
export default function ScriptTag({ delayMs, onCreate, onError, onLoad, src, id, className, children, ...otherProps }: ScriptLoaderProps): React.JSX.Element;
