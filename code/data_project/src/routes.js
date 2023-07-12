import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./pages/Main";
import Details from "./pages/Details";

export default (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/details' element={<Details />}></Route>
        </Routes>
    </BrowserRouter>
)