// Effect hooks let you perform side effects in react functional components
import React from 'react'
export const UseEffectComponent = () => {
    const [count, setCount] = React.useState(0)
    const [effort, setEffort] = React.useState(0)

    // Similar to componentDidMount and componentDidUpdate:
    // if effect returns a function, react will run it when it's time to cleanup
    // (componentWillUnmount)
    React.useEffect(() => {
        setTimeout(
            (
                (function () { document.title = `You clicked ${count} times` })
            )
            , 1000);
    })

    // below code is simillar to checking previous state and current state
    // effect will execute only if 'effect' is changed
    React.useEffect(() => {
        // alert('execute when count changed')
    }, [effort])

    return (
        <div>
            <p>You clicked <h3>{count}</h3></p>
            <input
                type='button'
                onClick={() => setCount(count + 1)}
                value="Click to increase"
            />
        </div>
    )
}