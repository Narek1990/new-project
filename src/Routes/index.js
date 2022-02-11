import { Route, Switch } from "react-router-dom";
import { Series } from "../pages/Series";
import { HomePage } from "../pages/Home";
import {Awards} from "../pages/Awards";
import {Festival} from "../pages/Festival";
import {Topics} from "../pages/Topics";
import {Picks} from "../pages/Picks";
import {Programs} from "../pages/Programs";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/series" exact component={Series}/>
            <Route path="/awards" exact component={Awards}/>
            <Route path="/festival" exact component={Festival}/>
            <Route path="/topics" exact component={Topics}/>
            <Route path="/picks" exact component={Picks}/>
            <Route path="/programs" exact component={Programs}/>
        </Switch>
    )
}

export default Routes;