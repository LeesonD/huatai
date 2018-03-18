import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PageTransition from "react-router-page-transition";
import login from "./login/login";
import loanApply from "./loanApply/loanApply";
import loanCalc from "./loanApply/loanCalc/loanCalc";
import result from "./loanApply/result/result";
import idcardPhoto from "./newForm/idcardPhoto/idcardPhoto";
import discern from "./newForm/discern/discern";
import sqsPhoto from "./newForm/sqsPhoto/sqsPhoto";
import facePhoto from "./newForm/facePhoto/facePhoto";
import totalInfo from "./newForm/totalInfo/totalInfo";
import jxsInfo from "./newForm/totalInfo/jxsInfo/jxsInfo";
import loanInfo from "./newForm/totalInfo/loanInfo/loanInfo";
// import submitForm from "./newForm/submitForm/submitForm";

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Route
                    render={({ location }) => (
                        <PageTransition timeout={500}>
                            <Switch location={location}>
                                <Route exact path="/" component={login} />
                                <Route path="/loanApply" component={loanApply} />
                                <Route path="/loanCalc" component={loanCalc} />
                                <Route path="/result" component={result} />
                                <Route path="/idcardPhoto" component={idcardPhoto} />
                                <Route path="/discern" component={discern} />
                                <Route path="/facePhoto" component={facePhoto} />
                                <Route path="/sqsPhoto" component={sqsPhoto} />
                                <Route path="/totalInfo" component={totalInfo} />
                                <Route path="/jxsInfo" component={jxsInfo} />
                                <Route path="/loanInfo" component={loanInfo} />
                                {/* <Route path="/submitForm" component={submitForm} /> */}
                            </Switch>
                        </PageTransition>
                    )}
                />
            </Router>
        );
    }
}