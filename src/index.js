import React from 'react';
import ReactDOM from 'react-dom';
import MyClassComponent, { MyFunctionalComponent } from './Components/UseState/UseStateSample1';

ReactDOM.render(
    <div>
        <p>Class component with state</p>
        <MyClassComponent />
        <p>Functional component with use state hook</p>
        <MyFunctionalComponent />
    </div>
    , document.getElementById('root'));

