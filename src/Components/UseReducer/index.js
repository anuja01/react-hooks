import React, { useReducer } from 'react';
// initial state for the reducer to use
const initialState = { count: 0 };

// reducer 
const rootReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

export const MyUseReducer = () => {
    const [state, dispatch] = useReducer(rootReducer, initialState)
    return (
        <>
            <p>count: {state.count}</p>
            <input
                type='button'
                value='increment'
                onClick={() => dispatch({ type: 'increment' })}
            />
            <input
                type='button'
                value='decrement'
                onClick={() => dispatch({ type: 'decrement' })}
            />
        </>
    )
}