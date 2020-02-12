import React, { Component } from 'react';
//  Comporision between using state in a class component and using hooks in a functional component

// Class component with state
class MyClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    render() {
        return (
            <div>
                <h3>count: {this.state.count}</h3>
                <input
                    type='button'
                    onClick={() => this.setState({ count: this.state.count + 1 })} 
                    value="Increase value"/>
            </div>
        )
    }
}

export default MyClassComponent;

// Functional component with useState hook

export const MyFunctionalComponent = () => {
    const [count, setCount] = React.useState(0)
    return(
        <div>
            <h3>count: {count}</h3>
            <input
                type='button'
                onClick={()=>{setCount(count+1)}}
                value='Increase value'
            />
        </div>
    )
}

