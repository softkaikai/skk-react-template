import React, { useState } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import Home from './home/home';

export function Index() {
    const [title , changeTitle] = useState('this is App');
    const style = {
        width: '100%',
        height: '100%'
    }
    return (
        <div style={style}>
            {title}
            <Home />
        </div>
    )
}


export default function App() {
    return (
        <Router basename="/app1">
            <Route path="/" component={Index} />
        </Router>
    )
}