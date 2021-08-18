import React from "react";
import { HashRouter as HRouter, Route, Switch } from "react-router-dom";
import Home from "../screens/home";
import UseAxios from "../screens/useAxios";
import UseBefore from "../screens/useBeforeLeave";
import UseClick from "../screens/useClick";
import UseConfirm from "../screens/useConfirm";
import UseEffect from "../screens/useEffect";
import UseFadeIn from "../screens/useFadeIn";
import UseFullScreen from "../screens/useFullScreen";
import UseInput from "../screens/useInput";
import UseNetwork from "../screens/useNetwork";
import UseNotification from "../screens/useNotification";
import UsePrevent from "../screens/usePreventLeave";
import UseScroll from "../screens/useScroll";
import UseTabs from "../screens/useTabs";
import UseTitle from "../screens/useTitle";
import Header from "./Header";

const Router = ()=>{
    return(
        <HRouter>
            <Header />
            <Switch>
                <Route exact path="/"component={Home} />
                <Route exact path="/useInput"component={UseInput} />
                <Route path="/useTabs" component={UseTabs} />
                <Route path="/useEffect" component={UseEffect} />
                <Route path="/useTitle" component={UseTitle} />
                <Route path="/useClick" component={UseClick} />
                <Route path="/useConfirm" component={UseConfirm} />
                <Route path="/usePrevnet" component={UsePrevent} />
                <Route path="/useBefore" component={UseBefore} />
                <Route path="/useFadeIn" component={UseFadeIn} />
                <Route path="/useNetwork" component={UseNetwork} />
                <Route path="/useScroll" component={UseScroll} />
                <Route path="/useFullScreen" component={UseFullScreen} />
                <Route path="/useNotification" component={UseNotification} />
                <Route path="/useAxios" component={UseAxios} />
            </Switch>
        </HRouter>
    )
}
export default Router;