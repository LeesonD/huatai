import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Button, Listview, Footer } from 'gsp-react';
import FkTotalInfoViewModel from "./fkTotalInfo.viewmodel";
import "./fkTotalInfo.css"

export default class FkTotalInfo extends Component {
    constructor(props) {
        super(props, new FkTotalInfoViewModel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        return (
            <Container>
                <Header name="全貌展示" onLeftArrowClick={this.viewModel.goback}></Header>
                <Content>
                    <br />
                    <div className="d1">车辆信息</div>
                    <Listview text={"合同编号"}>
                        <input type="text" value={""} placeholder={"合同编号"} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"所购车辆价格"}>
                        <input type="text" value={""} placeholder={"所购车辆价格"} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"开票人"}>
                        <input type="text" value={""} placeholder={"开票人"} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"开票人证件号"}>
                        <input type="text" value={""} placeholder={"开票人证件号"} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"开票单位"}>
                        <input type="text" value={""} placeholder={"开票单位"} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"开票时间"}>
                        <input type="text" value={""} placeholder={"开票时间"} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"发票号码"}>
                        <input type="text" value={""} placeholder={"发票号码"} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"发动机号"}>
                        <input type="text" value={""} placeholder={"发动机号"} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"车架号"}>
                        <input type="text" value={""} placeholder={"车架号"} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"贷款全额"}>
                        <input type="text" value={""} placeholder={"贷款全额"} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"期限"}>
                        <input type="text" value={""} placeholder={"期限"} style={{ width: '100%' }} />
                    </Listview>
                    <br />
                    <div className="d1">银行卡信息</div>
                    <Listview text={"持卡人姓名"}>
                        <input type="text" value={""} placeholder={"持卡人姓名"} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"卡号"}>
                        <input type="text" value={""} placeholder={"卡号"} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"证件类型"}>
                        <input type="text" value={""} placeholder={"证件类型"} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"证件号码"}>
                        <input type="text" value={""} placeholder={"证件号吗"} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"持卡人手机号码"}>
                        <input type="text" value={""} placeholder={"持卡人手机号码"} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"付款银行类型"}>
                        <input type="text" value={""} placeholder={"付款银行类型"} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"收款银行类型"}>
                        <input type="text" value={""} placeholder={"收款银行类型"} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"签约模式"}>
                        <input type="text" value={""} placeholder={"签约模式"} style={{ width: '100%' }} />
                    </Listview>
                    <Listview text={"签约状态"}>
                        <input type="text" value={""} placeholder={"签约状态"} style={{ width: '100%' }} />
                    </Listview>
                </Content>
                <Footer size="lg"
                    style={[{ 'color': 'white', 'backgroundColor': '#318ccf' }]}
                    buttonName={[ "提交"]}
                    callBackFooterButtonClick={[ this.viewModel.submit]}>
                </Footer>
            </Container>
        );
    }
}