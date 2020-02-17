import React from 'react';
import ReactDOM from 'react-dom';
import MyClassComponent, { MyFunctionalComponent } from './Components/UseState/UseStateSample1';
import { UseEffectComponent } from './Components/UseEffectHook/UseEffectSample1';
import { OwnHook } from './Components/OwnHooks';

ReactDOM.render(
    <div>
        <h3>NOTE</h3>
        <ul>
            <li>React hooks are used to handle side effects</li>
            <li>Use hooks on top level of the function</li>
            <li>Don't use hooks inside conditions, put the condition inside the hook</li>
        </ul>
        <p>Class component with <code>state</code></p>
        <MyClassComponent />
        <hr />
        <p>Functional component with <code>useState</code> hook</p>
        <MyFunctionalComponent />
        <hr />
        <p>Learn <code>useEffect</code> hook</p>
        <UseEffectComponent />
        <hr />
        <p>Writing custom hooks</p>
        <OwnHook />
        <hr />
    </div>
    , document.getElementById('root'));

