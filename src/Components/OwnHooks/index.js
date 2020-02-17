import React from 'react'
import { Component1 } from './Component1'
import { Component2 } from './Component2'
// Purpose of custom hooks: extract component logic into reusable functions
export const OwnHook = () => {
    return (
        <div>
            <p>Purpose of custom hooks: extract component logic into reusable functions</p>
            <p>Both below components require result of same side effect. Solution is to create a custom hook</p>
            <Component1 waitTime='1500'/>
            <Component2 waitTime='2000' />
        </div>
    )
}