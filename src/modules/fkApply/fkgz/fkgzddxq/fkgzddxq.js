import React from 'react';
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Button, Tab, Stepper ,Listview} from 'gsp-react';
import FkgzddxqViewModel from "./fkgzddxq.viewmodel";
import "./fkgzddxq.css"

export default class HomePahe extends Component {
    constructor(props) {
        super(props, new FkgzddxqViewModel());
        this.viewModel.bindDataToStorage();
    }
    render() {
        let state = this.viewModel.getState();
        let tabDiv;
        if (state.selected === 0) {
            let desc =
                <div className="d1">
                    <p> 2018-03-22</p>
                    <p>  处理人：</p>
                    <p>  意见：</p>
                    <br />
                </div>
            tabDiv =
                <Stepper
                    titles={['订单申请', '订单预审', '订单终审', '征信查询', '核准通知书']}
                    descriptions={[desc, desc, desc, desc, desc]}
                    current={2}
                    direction="vertical">
                </Stepper>
        } else if (state.selected === 1) {
            tabDiv =
                <div>
                    <div className="d2">  车辆信息</div>
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
                    <div className="d2">  银行卡信息</div>
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
                    <Button bstyle={"primary"} size="lg" text={"补充资料"} col={12} onClick={this.viewModel.bczl} />
                </div>
        }

        return (
            <Container>
                <Header name="订单详情" onLeftArrowClick={this.viewModel.goback}></Header>
                <Content>
                    <Tab tabs={['订单跟踪', '基本信息']} selected={state.selected} callBack={this.viewModel.changeTab.bind(this)} />
                    {tabDiv}
                </Content>
            </Container>
        );
    }
}