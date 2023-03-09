import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./app/Home";
import Settings from "./app/Settings";
import Game from "./app/Game";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ustawienia" element={<Settings />} />
                <Route path="/zagraj" element={<Game />} />
            </Routes>
        </div>
    );
}

export default App;
