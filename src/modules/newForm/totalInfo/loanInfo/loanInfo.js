import React from "react";
import { Component } from 'gsp-react-framework';
import { Container, Content, Header, Footer, Input } from 'gsp-react';
import LoanInfoViewModel from "./loanInfo.viewmodel";

export default class LoanInfo extends Component {
    constructor(props) {
        super(props, new LoanInfoViewModel());
        this.viewModel.bindDataToStorage();
        this.state = {
            info: [{
                "brand": "",
            }]
        }
    }
    render() {
        return (
            <Container>
                <Header name="贷款信息" onLeftArrowClick={this.viewModel.goBack} />
                <Content>
                    <Input label={"品牌"} name={""} text={this.state.info[0][""]} placeholder={"请选择"} align={"left"} />
                    <Input label={"车型"} name={""} text={this.state.info[0][""]} placeholder={"请选择"} align={"left"} />
                    <Input label={"附加品贷款"} name={""} text={this.state.info[0][""]} placeholder={"是"} align={"left"} />
                    <Input label={"申请类别"} name={""} text={this.state.info[0][""]} placeholder={"请选择"} align={"left"} />
                    <Input label={"金融产品"} name={""} text={this.state.info[0][""]} placeholder={"请选择"} align={"left"} />
                    <Input label={"厂商车型代码"} name={""} text={this.state.info[0][""]} placeholder={"请输入"} align={"left"} />
                    <Input label={"厂商指导价"} name={""} text={this.state.info[0][""]} placeholder={"请输入"} align={"left"} />
                    <Input label={"车辆销售价格"} name={""} text={this.state.info[0][""]} placeholder={"请输入"} align={"left"} />
                    <Input label={"车辆打包价"} name={""} text={this.state.info[0][""]} placeholder={"自动计算，无法修改"} align={"left"} />
                    <Input label={"贷款全额"} name={""} text={this.state.info[0][""]} placeholder={"请输入"} align={"left"} />
                    <Input label={"尾款全额"} name={""} text={this.state.info[0][""]} placeholder={"请输入"} align={"left"} />
                    <Input label={"厂商贴息"} name={""} text={this.state.info[0][""]} placeholder={"自动计算，无法修改"} align={"left"} />
                    <Input label={"经销商贴息"} name={""} text={this.state.info[0][""]} placeholder={"自动计算，可修改"} align={"left"} />
                    <Input label={"首付金额"} name={""} text={this.state.info[0][""]} placeholder={"自动计算，无法修改"} align={"left"} />
                    <Input label={"首付比例"} name={""} text={this.state.info[0][""]} placeholder={"自动计算，无法修改"} align={"left"} />
                    <Input label={"车辆用途"} name={""} text={this.state.info[0][""]} placeholder={"自用（非运营）"} align={"left"} />
                    {/* <Input label={"利率"} name={""} text={this.state.info[0][""]} placeholder={"请选择"} align={"left"} /> */}
                </Content>
                <Footer buttonName={["上一步","提交"]} size="sm" callBackFooterButtonClick={[this.viewModel.back,this.viewModel.next]}>
                </Footer>
            </Container>
        );
    }
}