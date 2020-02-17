import { useEffect, useState } from 'react'

// useTimer is the custom hook which shares the logic between components.
export const useTimer = (countTime) => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        setTimeout(
            (
                (function () {
                    setCounter(countTime)
                })
            )
            , countTime);
    })
    return `passed counter is ${counter}`
}