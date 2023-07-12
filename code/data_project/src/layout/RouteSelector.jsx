import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function RouterSeletor() {
    return (
        <ul>
            <NavLink exact to="/" activeClassName="active">总览页</NavLink>
            <NavLink to='/details' activeClassName="active">详情页</NavLink>
        </ul>
    );
}

export default RouterSeletor;