import React from 'react';
import { useTimer } from './customHooks'

export const Component2 = ({ waitTime }) => {
    const text = useTimer(waitTime)
    return (
        <div>
            <p>Component 2</p>
            <i>Passed value is: {text}</i>
        </div>
    )
}