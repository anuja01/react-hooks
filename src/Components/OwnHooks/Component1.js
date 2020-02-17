import React from 'react';
import { useTimer } from './customHooks'

export const Component1 = ({ waitTime }) => {
    const text = useTimer(waitTime)
    return (
        <div>
            <p>Component 1</p>
            <i>Passed value is: {text}</i>
        </div>
    )
}