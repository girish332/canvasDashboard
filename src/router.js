import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom'; // Make sure to import Routes

import HelloWorld from './helloWorld';

function App() {
    return (
        <HashRouter>
            <div>
                <Routes>
                    <Route path="/hello" element={<HelloWorld />} />
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;