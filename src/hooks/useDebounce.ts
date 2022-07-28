import {useCallback, useRef} from "react";

export default function (func: (...args: any) => void, ms: number): typeof func {
    const timeout = useRef<any>();

    return useCallback<typeof func>((...args: Parameters<typeof func>) => {
        clearTimeout(timeout.current)
        timeout.current = setTimeout(() => {
            func(...args)
        }, ms)
    }, [func, ms])
}

/*
export default function (func: () => void, ms: number): typeof func {
    const timeout = useRef<any>();

    return useCallback<typeof func>(() => {
        clearTimeout(timeout.current)
        timeout.current = setTimeout(() => {
            func()
        }, ms)
    }, [func, ms])
}
*/
