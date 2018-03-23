import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PageTransition from "react-router-page-transition";
import login from "./login/login";
//贷款申请导入
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
//主页及其他导入
import homePage from "./homePage/homePage";
import fkApplyHome from "./fkApply/fkApplyHome/fkApplyHome";
import fksq from "./fkApply/fksq/fksq";
import fapiaoChoose from "./fkApply/fksq/fksqForm/fapiao/fapiaoChoose/fapiaoChoose";
import fapiaoPhoto from "./fkApply/fksq/fksqForm/fapiao/fapiaoPhoto/fapiaoPhoto";
import fapiaoInfo from "./fkApply/fksq/fksqForm/fapiao/fapiaoInfo/fapiaoInfo";
import mianqianVideo from "./fkApply/fksq/fksqForm/mianqianViedo/mianqianVideo";
import loanHetongPhoto from "./fkApply/fksq/fksqForm/loanHetong/loanHetongPhoto/loanHetongPhoto";
import loanHetongInfo from "./fkApply/fksq/fksqForm/loanHetong/loanHetongInfo/loanHetongInfo";
import fkTotalInfo from "./fkApply/fksq/fksqForm/totalInfo/fkTotalInfo";
import carInfoEntering from "./fkApply/fksq/fksqForm/carInfoEntering/carInfoEntering";
import fkgzList from "./fkApply/fkgz/fkgzList";
import fkgzddxq from "./fkApply/fkgz/fkgzddxq/fkgzddxq";
import orderType from "./dcInfo/orderType/orderType";
import loanOrderList from "./dcInfo/orderList/loanOrderList/loanOrderList";
import loanDataList from "./dcInfo/dataList/loanDataList/loanDataList";
import photoList from "./dcInfo/dataList/photoList/photoList";

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Route
                    render={({ location }) => (
                        <PageTransition timeout={500}>
                            <Switch location={location}>
                                {/* <Route path="/" component={} /> */}
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
                                <Route path="/homePage" component={homePage} />
                                <Route path="/fkApplyHome" component={fkApplyHome} />
                                <Route path="/fksq" component={fksq} />
                                <Route path="/fapiaoChoose" component={fapiaoChoose} />
                                <Route path="/fapiaoPhoto" component={fapiaoPhoto} />
                                <Route path="/fapiaoInfo" component={fapiaoInfo} />
                                <Route path="/mianqianVideo" component={mianqianVideo} />
                                <Route path="/loanHetongPhoto" component={loanHetongPhoto} />
                                <Route path="/loanHetongInfo" component={loanHetongInfo} />
                                <Route path="/fkTotalInfo" component={fkTotalInfo} />
                                <Route path="/carInfoEntering" component={carInfoEntering} />
                                <Route path="/fkgzList" component={fkgzList} />
                                <Route path="/fkgzddxq" component={fkgzddxq} />
                                <Route path="/orderType" component={orderType} />
                                <Route path="/loanOrderList" component={loanOrderList} />
                                <Route path="/loanDataList" component={loanDataList} />
                                <Route path="/photoList" component={photoList} />
                            </Switch>
                        </PageTransition>
                    )}
                />
            </Router>
        );
    }
}