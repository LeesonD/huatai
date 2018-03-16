import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PageTransition from "react-router-page-transition";
import login from "./login/login";
import loanApply from "./loanApply/loanApply";
import loanCalc from "./loanApply/loanCalc/loanCalc";
import result from "./loanApply/result/result";
import idcardPhoto from "./newForm/idcardPhoto/idcardPhoto";
import discern from "./newForm/discern/discern";

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Route
                    render={({ location }) => (
                        <PageTransition timeout={500}>
                            <Switch location={location}>
                                <Route exact path="/" component={login}/>
                                <Route path="/loanApply" component={loanApply}/>
                                <Route path="/loanCalc" component={loanCalc}/>
                                <Route path="/result" component={result}/>
                                <Route path="/idcardPhoto" component={idcardPhoto}/>
                                <Route path="/discern" component={discern}/>
                            </Switch>
                        </PageTransition>
                    )}
                />
            </Router>
        );
    }
}