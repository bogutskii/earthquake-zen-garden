import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/content/Content";
import Profile from "./components/Profile";
import Detail from "./components/content/Detail";

function App() {
    return <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path='/' component={Content}/>
            <Route path='/detail/:id' component={Detail}/>
            <Route path='/profile' component={Profile}/>
        </Switch>
    </BrowserRouter>
}

export default App;